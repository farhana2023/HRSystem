<template>
  <section class="section">
    <div class="row align-items-top">
      <div class="col-lg-6">
        <!-- Default Card -->
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Summary</h5>
            The Integrated Employee Management and Project Collaboration System is a comprehensive
            web-based platform designed to streamline employee management, team collaboration,
            project assignment, and administrative tasks. It empowers organizations to efficiently
            manage their workforce, project portfolios, and operational processes. The system
            provides modules for creating employees, managing profiles, forming teams, assigning
            team members, creating projects, task allocation, maintaining meeting logs, viewing
            payroll information, and tracking employee attendance.
          </div>
        </div>
        <!-- End Default Card -->

        <!-- Card with header and footer -->
        <div class="card">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="assets/img/CreateEmployee.webp" class="img-fluid rounded" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Employee</h5>
            <p class="card-text">
              Creating an employee involves adding a new member to your organization's workforce
              within the Integrated Employee Management and Project Collaboration System. This
              process allows to establish an official record for the employee, encompassing both
              personal and professional information.
            </p>
            <!-- <a href="#!" class="btn btn-info">View Profile</a> -->
          </div>
        </div>
        <!-- End Card with header and footer -->

        <!-- Card with an image on left -->
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="assets/img/ListEmployee.jpeg" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">View Employee</h5>
                <p class="card-text">
                  the "View Employee Profiles" feature enhances organizational efficiency by
                  providing a comprehensive view of each employee's details.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- End Card with an image on left -->
      </div>

      <div class="col-lg-3">
        <!-- Card with an image on top -->
        <div class="card" style="width: 18rem">
          <img src="assets/img/Teams.jpeg" class="card-img-top" alt="Chicago Skyscrapers" />
          <div class="card-body">
            <h5 class="card-title">Teams</h5>
            <p class="card-text">
              Efficient team management and project collaboration are integral aspects of the
              Integrated Employee Management and Project Collaboration System. This platform
              facilitates seamless teamwork through the creation and management of teams, assignment
              of team members, view team members.
            </p>
          </div>
          <ul class="list-group list-group-light list-group-small">
            <li class="list-group-item px-4">Create Team</li>
            <li class="list-group-item px-4">View Team Members</li>
            <li class="list-group-item px-4">Assign New Team Members</li>
          </ul>
          <!-- <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div> -->
        </div>
        <!-- End Card with an image on top -->

        <div class="card" style="width: 18rem">
          <img src="assets/img/Project.jpg" class="card-img-top" alt="Chicago Skyscrapers" />
          <div class="card-body">
            <h5 class="card-title">Projects</h5>
            <p class="card-text">
              The Projects module offers a user-friendly interface to create and manage projects, as
              well as assign dedicated team members.
            </p>
          </div>
          <ul class="list-group list-group-light list-group-small">
            <li class="list-group-item px-4">Create Project</li>
            <li class="list-group-item px-4">View Project</li>
            <li class="list-group-item px-4">Assign Team Members</li>
          </ul>
          <!-- <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div> -->
        </div>
      </div>

      <div class="col-lg-3">
        <!-- Card with an image overlay -->
        <div class="card">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="assets/img/meetinglog.jpg" class="img-fluid" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Meeting log</h5>
            <p class="card-text">
              Meeting Log Management: Efficiently Recording and Managing Meeting Logs The "Meeting
              Log" feature in the Integrated Employee Management and Project Collaboration System
              serves as a valuable tool for documenting, tracking, and managing the outcomes of
              meetings, ensuring effective communication and alignment among team members.
            </p>
            <!-- <a href="#!" class="btn btn-primary">View Meeting Log</a> -->
          </div>
        </div>
        <!-- End Card with an image overlay -->

        <!-- Card with an image on top -->
        <div class="card">
          <img src="assets/img/Attendance.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Attendance</h5>
            <p class="card-text">
              the Employee Attendance Summary feature simplifies attendance monitoring, aids
              decision-making, and fosters a more transparent and accountable work environment.
            </p>
          </div>
        </div>
        <!-- End Card with an image on top -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
