


 <template>
  <div class="mt-3">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6">
          <h1>Welcome to Meeting Master</h1>
          <span>{{ user }}</span>
          <p class="lead">
            Empower your team with efficient meetings, seamless task assignment, and streamlined
            collaboration.
          </p>
          <p>
            Meeting Master is the ultimate solution for team leaders to manage meetings, assign
            tasks, and enhance team productivity.
          </p>
          <button class="btn btn-dark btn-lg btn-block" @click.prevent="OnClickStarted">Get Started</button>
        </div>
        <div class="col-md-6">
          <img src="/src/assets/meetingmaster.jpg" alt="Meeting Master" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>


<script >
export default{
  name:'HomeView'
}

</script>
