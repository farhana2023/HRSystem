<template>
    <div>
        <form>
        
            <div class="row mb-3">
                  <label for="inputDate" class="col-sm-2 col-form-label">Joining Date</label>
                  <div class="col-sm-10">
                    <input type="date" class="form-control">
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label">Department</label>
                  <div class="col-sm-10">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Select Department</option>
                      <option value="1">Software Development</option>
                      <option value="2">Quality Assurance (QA)</option>
                      <option value="3">Product Management</option>
                      <option value="4">Product Management</option>
                      <option value="5">Cybersecurity</option>
                      <option value="6">Cloud Engineering</option>
                      <option value="7">Project Management</option>
                      <option value="8">DevOps</option>
                      <option value="9">Database Administration</option>
                      <option value="10">Technical Writing / Documentation </option>
                      <option value="11">Infrastructure Management</option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label">Team</label>
                  <div class="col-sm-10">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Select Team</option>
                      <option value="1">SD-CodeCrafters</option>
                      <option value="2">SD-PixelPioneers</option>

                      <option value="3">QA-Test Titans</option>
                      <option value="4">QA-BugBusters</option>

                      <option value="5">PM-Innovation Leaders</option>
                      <option value="6">PM-Market Maestros</option>

                      <option value="7">IT Support-Support Squad</option>
                      <option value="8">IT Support-Tech Troubleshooters</option>

                      <option value="9">CS-Security Sentinels</option>
                      <option value="10">CS-CyberGuardians</option>

                      <option value="11">NE-Network Navigators</option>
                      <option value="12">NE-Network Nomads</option>

                      <option value="13">CLS-Cloud Chasers</option>
                      <option value="14">CLS-Cloud Architects</option>

                      <option value="15">PM-Project Pioneers</option>
                      <option value="16">PM-Project Pilots</option>

                      <option value="17">DO-DevOps Dynamos</option>
                      <option value="18">DO-DevOps Mavericks</option>

                      <option value="19">TD-Content Crafters</option>
                      <option value="20">TD-Document Wizards</option>

                      <option value="21">TM-InfraGuard Team</option>
                      <option value="22">TM-Tech Terrain Team</option>

          

                    </select>
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label">User Type</label>
                  <div class="col-sm-10">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Select Type</option>
                      <option value="1">Admin</option>
                      <option value="2">TeamLeader</option>
                      <option value="3">Employee</option>
                    </select>
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </form>

    </div>
</template>

<script>
    export default {
       name:'HrEmpChildAdditionl' 
    }
</script>

<style  scoped>

</style>