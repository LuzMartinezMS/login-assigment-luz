
<template>
  <div class="main">
    <navBar/><br>
  <div class="table">
  <el-table
    ref="filterTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date of joining"
      sortable
      width="180"
      column-key="date"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="Employee"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Adress"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="Workplace"
      width="180"
      :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
        effect="dark"
          :type="scope.row.tag === 'Home' ? 'Success' : 'info'"
          disable-transitions>{{scope.row.tag}}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="Edit"
      width="180">
      <el-button type="primary" icon="el-icon-edit" circle @click="centerDialogVisible = true"></el-button>
      <el-dialog
          title="Warning"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>
          <span>Only admin can edit user information</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
          </span>
        </el-dialog>
    </el-table-column>
  </el-table><br>
  <el-button type="primary" round @click="clearFilter">clear filters</el-button>
</div>
</div>
</template>

<script>
import navBar from '../components/navBar.vue'
  export default {
    name:'mainPage',
    components:{
      navBar
    },
    data() {
      return {
        centerDialogVisible: false,
        tableData: [{
          date: '2016-05-03',
          name: 'Citltali',
          address: 'CDMX',
           
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Francisco',
          address: 'MTY',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Juan',
          address: 'CDMX',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Demian',
          address: 'CDMX',
          tag: 'Office'
        }]
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>

<style scoped>
*{
  font-family: Arial, Helvetica, sans-serif;
  
}
.main{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url('../../Sryas\ Zoom\ Background\ Meeting\ room.jpg');
}

.table{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65vw;
  padding-left:18vw ;
  padding-top: 8vh;

}

</style>
