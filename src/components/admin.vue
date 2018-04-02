<template>
    <div>
      <div>
        <el-table :data="tableData">
          <el-table-column label="###">
              <template slot-scope="scope">
                  <el-radio v-model="radio" label=""></el-radio>
              </template>
          </el-table-column>
          <el-table-column prop="id" label="序号"></el-table-column>
          <el-table-column prop="account" label="管理员账号">2</el-table-column>
          <el-table-column prop="name" label="姓名">3</el-table-column>
          <el-table-column prop="money" label="收到现金">4</el-table-column>
        </el-table>
      </div>
      <div class="topp">
        <span>操作：</span>
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
          <span style="color:green">*激活</span>
          <span style="color:red">*禁用</span>
      </div>
      <div class="topp">
        <el-button type="primary">提交</el-button>
      </div>
    </div>

</template>
   
<script>
export default {
  name: 'admin',
  data() {
    return {
      tableData: [
        {
          radio: "",
          id: "1",
          account: "admin",
          name: "shadowam",
          money: "0.00"
        },
        {
          id: "2",
          account: "admin",
          name: "AMshadows",
          money: "0.00"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "激活管理员"
        },
        {
          value: "选项2",
          label: "禁用管理员"
        },
        {
          value: "选项3",
          label: "删除管理员"
        },
      ],
      value: ""
    };
  }
};
</script>

<style>
.topp{
  margin-top: 40px;
  text-align: center;
}
</style>
