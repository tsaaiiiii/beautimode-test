<script setup>
import { api_todoGet, api_todoPost, api_todoDelete, api_todoPatch } from '@/apis/apiTodo.js'
import { ref, onMounted, computed } from 'vue'
import LoadingItem from '../components/LoadingItem.vue'

// 取得todolist
const data = ref([])
const isLoading = ref(true)
const getRequest = async () => {
  try {
    const response = await api_todoGet()
    data.value = response.data
    isLoading.value = false
  } catch (error) {
    console.error(error)
  }
}
onMounted(getRequest)
const todoContent = ref({
  userId: 1,
  title: '',
  completed: false
})
// 新增項目
const addRequest = async () => {
  try {
    const response = await api_todoPost(todoContent.value)
    console.log(response)
    data.value.push({
      userId: 1,
      title: todoContent.value.title,
      completed: false,
      id: `${data.value.length + 1}`
    })
    alert('新增成功')
    todoContent.value = ''
  } catch (error) {
    console.log(error)
  }
}
const sentBtn = () => {
  addRequest()
}

// 刪除項目
const deleteRequest = async (id) => {
  try {
    const response = await api_todoDelete(id)
    console.log(response)
    data.value.splice(`${id - 1}`, 1)
    alert('刪除成功')
  } catch (error) {
    console.log(error)
  }
}
const deleteItem = (id) => {
  deleteRequest(id)
}

// 切換狀態
const patchRequest = async (id) => {
  try {
    const response = await api_todoPatch(id)
    console.log(response)
    if (data.value[id - 1].completed === false) {
      data.value[id - 1].completed = true
      alert('完成！！')
    } else if (data.value[id - 1].completed === true) {
      data.value[id - 1].completed = false
      alert('未完成！')
    }
  } catch (error) {
    console.log(error)
  }
}

const type = ref('All')
const setType = (value) => {
  type.value = value
}

const dataFilter = computed(() => {
  if (type.value === 'Finished') {
    return data.value.filter((todo) => todo.completed === true)
  } else if (type.value === 'Pending') {
    return data.value.filter((todo) => todo.completed === false)
  } else {
    return data.value
  }
})
</script>
<template>
  <div>
    <div class="bg-slate-50 py-40">
      <div>
        <div class="flex justify-center gap-2">
          <input
            type="text"
            class="w-1/2 p-1 outline-none bg-slate-50 border-b-[2px] border-slate-950 border-dashed placeholder:text-slate-500"
            placeholder="What's your plan for today?"
            v-model="todoContent.title"
          />
          <input
            type="button"
            class="cursor-pointer hover:font-bold hover:scale-105 hover:bg-[#FFA101] hover:text-white rounded duration-300 border-dashed border border-slate-950 px-2 py-1"
            value="sent"
            @click="sentBtn"
          />
        </div>
        <div class="flex gap-10 my-10 justify-center">
          <input
            type="button"
            class="cursor-pointer py-1 bg-[#FAE6B1] w-20 rounded hover:bg-[#FFA101] duration-500 hover:text-white hover:font-bold"
            value="All"
            @click="setType('All')"
          />
          <input
            type="button"
            class="cursor-pointer py-1 bg-[#FAE6B1] w-20 rounded hover:bg-[#FFA101] duration-500 hover:text-white hover:font-bold"
            value="Finished"
            @click="setType('Finished')"
          />
          <input
            type="button"
            class="cursor-pointer py-1 bg-[#FAE6B1] w-20 rounded hover:bg-[#FFA101] duration-500 hover:text-white hover:font-bold"
            value="Pending"
            @click="setType('Pending')"
          />
        </div>
        <div v-if="isLoading">
          <LoadingItem />
        </div>
        <div v-else class="flex justify-center">
          <ul>
            <li v-for="todo in dataFilter" class="flex gap-4 py-4" :key="todo.id">
              <p>{{ todo.title }}</p>
              <div class="flex gap-2">
                <input
                  type="checkbox"
                  class="cursor-pointer"
                  value="✔"
                  @click="patchRequest(todo.id)"
                  v-bind:checked="todo.completed"
                />
                <input
                  type="button"
                  class="delete cursor-pointer"
                  value="✘"
                  @click="deleteItem(todo.id)"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
input.delete {
  border: none;
  color: #37613c;
  font-size: 28px;
  cursor: pointer;
  margin-top: -10px;
}
input.delete:hover {
  color: #ca101e;

  transition: 0.6s;
}
input[type='checkbox'] {
  appearance: none;
  width: 22px;
  height: 22px;
  border: 2px solid black;
  border-radius: 50%;
  outline: none;
  transition: 0.5s;
  position: relative;
}

input[type='checkbox']:checked {
  background-color: #37613c;
  border-color: black;
}
input[type='checkbox']:hover {
  background-color: #37613c;
}

input[type='checkbox']:checked::before {
  content: '✓';
  font-size: 1.2em;
  font-weight: 700;
  color: white;
  position: absolute;
  top: -5px;
  left: 1px;
}
</style>
