<template>
    <div>
        <div>新建管理员</div>
        <div class="main">
            <div class="text">
                <div>------------------------------ 管理员信息 ------------------------------</div>
                <div class="textone"><a>*</a> 管理员账号：<el-input v-model="input" placeholder="(4-32 字符)"></el-input></div>
                <div class="texttwo"><a>*</a> 密码：<el-input v-model="input" placeholder="(4-32 字符)"></el-input></div>
                <div class="textthree"><a>*</a> 确认密码：<el-input v-model="input" placeholder="(4-32 字符)"></el-input></div>
            </div>
            <div class="power">
                <div>-------------------------------- 拥有权限 -------------------------------</div>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <div>&nbsp;</div>
                <el-checkbox-group v-model="checkedpowers" @change="handleCheckedpowersChange">
                    <el-checkbox v-for="power in powers" :label="power" :key="power">{{power}}</el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="power">
                <el-button type="primary">新建管理员</el-button>
            </div>
        </div>
        <div>


        </div>
    </div>
</template>
<script>
 const powerOptions = ['创建', '编辑', '删除','访问','统计'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedpowers: ['', ''],
        powers: powerOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedpowers = val ? powerOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedpowersChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.powers.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.powers.length;
      }
    }
  };
</script>
<style>
a {
  color: black;
}
.main {
  height: 500px;
}

.text {
  padding-left: 30%;
  padding-top: 50px;
}
.textone {
  padding-top: 20px;
}
.texttwo {
  padding-top: 10px;
  padding-left: 48px;
}
.textthree {
  padding-top: 10px;
  padding-left: 15px;
}
.power {
  padding-top: 20px;
  padding-left: 30%;
}

.el-input {
  width: 200px;
}
</style>
