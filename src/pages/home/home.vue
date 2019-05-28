<template>
    <div>
        <span>HOME:</span>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
     <el-button type="primary" @click="dialogVisiable=true">主要按钮</el-button>
     <dia-log  v-show="dialogVisiable" @visiable="dialogVisiable=false" :bUrl="{path:require('../../asset/images/message.png')}">
         <div slot="body">BODY</div>
     </dia-log>
    </div>  
</template>
<script>
import DiaLog from '../../components/dia-log'

    export default {
        components: {
            DiaLog,
        },
        data() {
            return {
          input: "",
          value1:"",
            value: '',
          dialogVisiable:false,
          options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]

            }
        },
        watch: {
            dialogVisiable(newValue, oldValue) {
               
            }
        },
    }
</script>

<style lang="stylus" scoped>
.el-input {
    width: 200px;
}
</style>

