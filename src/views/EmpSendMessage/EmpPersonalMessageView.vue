<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">My Inbox</h5>
            <div
              class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns search-results"
            >
              <div class="datatable-top">
                <div class="datatable-dropdown">
                  <label>
                    <select class="datatable-selector">
                      <option value="5">5</option>
                      <option value="10" selected>10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                    </select>
                    entries per page
                  </label>
                </div>
                <div class="datatable-search">
                  <input
                    v-model="search"
                    class="datatable-input"
                    placeholder="Search..."
                    type="search"
                    title="Search within table"
                  />
                </div>
              </div>
              <div class="datatable-container">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">From</th>
                      <th scope="col">Message Subject</th>
                      <th scope="col">Date</th>
                      <th scope="col">View</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- <tr v-for="(message, index) in lstMsg" :key="index"> -->
                    <tr
                      v-for="(message, index) in lstMsg"
                      :key="index"
                      :class="{ unread: !message.isMsgRead }"
                    >
                      <td>{{ message.sendFromFullName }}</td>
                      <td>{{ message.sendToMsgSubject }}</td>
                      <!-- <td>{{ format(new Date(message.MsgDate),'MM/dd/yyyy') }}</td>
                   -->
                      <td>{{  Date(message.MsgDate).toString() }}</td>
                      <td class="text-center" style="width: 40px">
                        <!-- <button
                          @click.prevent="ViewMsg(message)"
                          type="button"
                          class="btn btn-primary btn-sm"
                        >
                          <i class="bi bi-envelope"></i>
                        </button> -->

                        <button
                          @click.prevent="ViewMsg(message)"
                          type="button"
                          class="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#verticalycentered"
                        >
                          <i class="bi bi-envelope"></i>
                        </button>
                      </td>
                      <td class="text-center" style="width: 40px">
                        <button
                          @click.prevent="DeleteMsg(index)"
                          type="button"
                          class="btn btn-danger btn-sm"
                        >
                          <i class="bi bi-trash3"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="datatable-bottom">
                <div class="datatable-info">Showing 1 to 1 of 1 entries</div>
                <nav class="datatable-pagination">
                  <ul class="datatable-pagination-list"></ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div
    v-if="isPopupVisible"
    class="modal fade"
    id="verticalycentered"
    tabindex="-1"
    style="display: none"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Message Details</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <p><strong>From:</strong> {{ selectedMessage.sendFromEmail }}</p>
          <p><strong>Subject:</strong> {{ selectedMessage.sendToMsgSubject }}</p>
          <p><strong>Body:</strong> {{ selectedMessage.sendToMsgDetails }}</p>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button
            @click.prevent="replyMessage(selectedMessage)"
            type="button"
            data-bs-dismiss="modal"
            class="btn btn-primary"
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Vertically centered Modal-->
</template>

<script>
import { useUserStore } from '@/stores/user'
import { getAllMsg,deleteMsgData,updateReadMsgData } from '@/services/empData'


export default {
  name: 'EmpPersonalMessageView',
  data() {
    return {
      lstMsg: [],
      selectedMessage: null,
      isPopupVisible: false,
      isMsgRead:false,

    }
  },

  //     computed: {
  //     filteredMessage: function () {
  //       return this.lstMsg.filter((Messages) => {
  //         const searchTerm = this.search.toLowerCase()
  //         const From = employee.data.fullName
  //           ? employee.data.fullName.toLowerCase().includes(searchTerm)
  //           : false

  //         const emailMatch = employee.data.email
  //           ? employee.data.email.toLowerCase().includes(searchTerm)
  //           : false
  //         const designationMatch = employee.data.designation
  //           ? employee.data.designation.toLowerCase().includes(searchTerm)
  //           : false
  //         const departmentMatch = employee.data.department
  //           ? employee.data.department.toLowerCase().includes(searchTerm)
  //           : false

  //         const userRoleMatch = employee.data.userRole
  //           ? employee.data.userRole.toLowerCase().includes(searchTerm)
  //           : false

  //         // Combine the conditions using logical OR (||) to find a match in any field
  //         return fullNameMatch || emailMatch || designationMatch || departmentMatch || userRoleMatch
  //       })
  //   },},
  setup() {
    const empPersonalStore = useUserStore()
    return { empPersonalStore }
  },
  created() {
    this.getMsg()
  },
  methods: {
    async getMsg() {
      const userId = this.empPersonalStore.userId // Assuming you have a userId property in your store

      console.log('getuserId', userId)
      const Messages = await getAllMsg(userId)
      console.log('Messages', Messages)
      this.lstMsg = Messages // Assuming lstMsg is meant to store the messages
    },


      



    async ViewMsg(message) {
      this.isPopupVisible = true
      this.selectedMessage = message

      console.log('isPopupVisible', this.isPopupVisible)

      console.log('selectedMessage', this.selectedMessage)
      message.isMsgRead=true;

    // const IsReadMsgData=await  updateReadMsgData( this.selectedMessage ,this.selectedMessage.id)
     try {
        await updateReadMsgData(this.selectedMessage, this.selectedMessage.id);
        //const updatedUserData = await getEmpUserData(this.userId);

      } catch (error) {
        console.error('Error updating employee data:', error);
       
      }




    },

    async replyMessage(selectedMessage){
      console.log('employee', selectedMessage)

        this.$router.push({
          name: 'emp_SendMessage',
          query: {
            id: this.selectedMessage.sendFromUserID,
            email: this.selectedMessage.sendFromEmail,
            fullname: this.selectedMessage.sendFromFullName
          }
})

    },

    async DeleteMsg(index) {
  const msgToDelete = this.lstMsg[index];

  const confirmDelete = window.confirm('Are you sure you want to permanently delete this message?');

  if (confirmDelete) {
    try {
      await deleteMsgData(msgToDelete);
      console.log('msgToDelete', msgToDelete);

     
      this.lstMsg.splice(index, 1);

    } catch (error) {
      console.error('Error deleting message:', error);
    }
  } else {
    // User canceled deletion
    // No action needed if the user cancels; the message won't be deleted.
  }
},
    },


  }

</script>

<style scoped>
.unread {
  font-weight: bold;
}
</style>
