<script setup>
import { ref, watch } from 'vue'
const data = ref({
  week_day0: '000000000000000000000000000000000000000000000000',
  week_day1: '111111111111111111111111111111111111111111111111',
  week_day2: '111111111111111111111111111111111111111111111111',
  week_day3: '111111111111111111111111111111111111111111111111',
  week_day4: '111111111111111111111111111111111111111111111111',
  week_day5: '111111111111111111111111111111111111111111111111',
  week_day6: '111111111111111111111111111111111111111111111111'
})
// 起始決定從第幾項開始改成1
const startTiming = ref([
  '00:00',
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '04:00',
  '04:30',
  '05:00',
  '05:30',
  '06:00',
  '06:30',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30'
])
// 決定到第幾項結束
const endTiming = ref([
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '04:00',
  '04:30',
  '05:00',
  '05:30',
  '06:00',
  '06:30',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30',
  '23:59'
])

const selectedStartTime = ref([
  { week_day0: startTiming.value[0] },
  { week_day1: startTiming.value[0] },
  { week_day2: startTiming.value[0] },
  { week_day3: startTiming.value[0] },
  { week_day4: startTiming.value[0] },
  { week_day5: startTiming.value[0] },
  { week_day6: startTiming.value[0] }
])
const selectedEndTime = ref([
  { week_day0: endTiming.value[endTiming.value.length - 1] },
  { week_day1: endTiming.value[endTiming.value.length - 1] },
  { week_day2: endTiming.value[endTiming.value.length - 1] },
  { week_day3: endTiming.value[endTiming.value.length - 1] },
  { week_day4: endTiming.value[endTiming.value.length - 1] },
  { week_day5: endTiming.value[endTiming.value.length - 1] },
  { week_day6: endTiming.value[endTiming.value.length - 1] }
])
const selectedStartTimeIndex = ref([0, 0, 0, 0, 0, 0, 0])
const selectedEndTimeIndex = ref([48, 48, 48, 48, 48, 48, 48])

for (let i = 0; i < 7; i++) {
  watch(
    () => selectedStartTime.value[i]['week_day' + i],
    (newStartTime) => {
      selectedStartTimeIndex.value[i] = startTiming.value.indexOf(newStartTime)
      updateData(i)
    }
  )

  watch(
    () => selectedEndTime.value[i]['week_day' + i],
    (newEndTime) => {
      selectedEndTimeIndex.value[i] = endTiming.value.indexOf(newEndTime)
      updateData(i)
    }
  )
}

const updateData = (day) => {
  const newData = { ...data.value }
  const startIndex = selectedStartTimeIndex.value[day]
  const endIndex = selectedEndTimeIndex.value[day]
  newData['week_day' + day] = ''
  for (let i = 0; i < 48; i++) {
    if (i >= startIndex && i <= endIndex) {
      newData['week_day' + day] += '1'
    } else {
      newData['week_day' + day] += '0'
    }
  }
  data.value = newData
}

const selectedTimeShow = ref([false, true, true, true, true, true, true])
const switchStatus = (weekIndex) => {
  selectedTimeShow.value[weekIndex] = !selectedTimeShow.value[weekIndex]
  if (selectedTimeShow.value[weekIndex] === true) {
    data.value['week_day' + weekIndex] = '111111111111111111111111111111111111111111111111'
  } else {
    data.value['week_day' + weekIndex] = '000000000000000000000000000000000000000000000000'
  }
}
const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六']
</script>
<template>
  <div class="py-40 bg-slate-50">
    <div v-for="(week, weekIndex) in daysOfWeek" :key="weekIndex" class="flex gap-4 justify-center">
      <div class="flex w-[500px] gap-5 mb-5">
        <div class="flex gap-2">
          <h2>星期{{ week }}</h2>
          <div @click="switchStatus(weekIndex)">
            <input type="checkbox" class="toggle" v-bind:checked="selectedTimeShow[weekIndex]" />
          </div>
        </div>
        <p v-if="!selectedTimeShow[weekIndex]">本日不供餐</p>
        <div v-if="selectedTimeShow[weekIndex]">
          <label for="start-time">開始時間: </label>
          <select
            id="start-time"
            v-model="selectedStartTime[weekIndex]['week_day' + weekIndex]"
            class="outline-none bg-slate-50"
          >
            <option
              v-for="(time, index) in startTiming"
              :key="index"
              :value="time"
              :disabled="
                index > endTiming.indexOf(selectedEndTime[weekIndex]['week_day' + weekIndex])
              "
            >
              {{ time }}
            </option>
          </select>
          <label for="end-time">結束時間: </label>
          <select
            id="end-time"
            v-model="selectedEndTime[weekIndex]['week_day' + weekIndex]"
            class="outline-none bg=slate-50"
          >
            <option
              v-for="(time, index) in endTiming"
              :key="index"
              :value="time"
              :disabled="
                index < startTiming.indexOf(selectedStartTime[weekIndex]['week_day' + weekIndex])
              "
            >
              {{ time }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <div class="w-[700px] my-20 text-white bg-black p-10 rounded">
        <code>
          {{ data }}
        </code>
      </div>
    </div>
  </div>
</template>
