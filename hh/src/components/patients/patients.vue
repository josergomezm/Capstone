<template id="patients">
  <div id="patientsdiv" class="container-fluid">
    <div id="maincontent">

      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">

      <div class="container text-center">

        <h1 class="h3 mb-4 font-weight-bold">Patients</h1>

        <form>
          <input class="mb-5" type="text" name="search" placeholder="Search Patient..">
        </form>

        <div id="headers">
          <div class="row">
            <div class="col-12 col-sm-10">
              <div class="row">
                <div class="col">Patient Name</div>
                <div class="col-3 d-none d-sm-block">First Entry</div>
                <div class="col-3 d-none d-sm-block">Last Entry</div>
                <div class="col-2 d-none d-sm-block">Number of Wounds</div>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div> 

        <ul id="patients">
          <li class="row">
            <a href="" class="col-12 col-sm-10">
              <div class="row">
                <div class="col">John Doe</div>
                <div class="col-3 d-none d-sm-block">1/1/2018</div>
                <div class="col-3 d-none d-sm-block">14/1/2018</div>
                <div class="col-2 d-none d-sm-block">1</div>
              </div>
            </a>
            <button type="button" class="btn btn-danger col">Update</button>
          </li>

          <li class="row">
            <a href="" class="col-12 col-sm-10">
              <div class="row">
                <div class="col">John Doe</div>
                <div class="col-3 d-none d-sm-block">1/1/2018</div>
                <div class="col-3 d-none d-sm-block">14/1/2018</div>
                <div class="col-2 d-none d-sm-block">1</div>
              </div>
            </a>
            <button type="button" class="btn btn-danger col">Update</button>
          </li>

          <li class="row">
            <a href="" class="col-12 col-sm-10">
              <div class="row">
                <div class="col">John Doe</div>
                <div class="col-3 d-none d-sm-block">1/1/2018</div>
                <div class="col-3 d-none d-sm-block">14/1/2018</div>
                <div class="col-2 d-none d-sm-block">1</div>
              </div>
            </a>
            <button type="button" class="btn btn-danger col">Update</button>
          </li>

          <li class="row">
            <a href="" class="col-12 col-sm-10">
              <div class="row">
                <div class="col">John Doe</div>
                <div class="col-3 d-none d-sm-block">1/1/2018</div>
                <div class="col-3 d-none d-sm-block">14/1/2018</div>
                <div class="col-2 d-none d-sm-block">1</div>
              </div>
            </a>
            <button type="button" class="btn btn-danger col">Update</button>
          </li>

          <li class="row">
            <a href="" class="col-12 col-sm-10">
              <div class="row">
                <div class="col">John Doe</div>
                <div class="col-3 d-none d-sm-block">1/1/2018</div>
                <div class="col-3 d-none d-sm-block">14/1/2018</div>
                <div class="col-2 d-none d-sm-block">1</div>
              </div>
            </a>
            <button type="button" class="btn btn-danger col">Update</button>
          </li>

          <li class="row">
            <a href="" class="col-12 col-sm-10">
              <div class="row">
                <div class="col">John Doe</div>
                <div class="col-3 d-none d-sm-block">1/1/2018</div>
                <div class="col-3 d-none d-sm-block">14/1/2018</div>
                <div class="col-2 d-none d-sm-block">1</div>
              </div>
            </a>
            <button type="button" class="btn btn-danger col">Update</button>
          </li>

          <li class="row">
            <a href="" class="col-12 col-sm-10">
              <div class="row">
                <div class="col">John Doe</div>
                <div class="col-3 d-none d-sm-block">1/1/2018</div>
                <div class="col-3 d-none d-sm-block">14/1/2018</div>
                <div class="col-2 d-none d-sm-block">1</div>
              </div>
            </a>
            <button type="button" class="btn btn-danger col">Update</button>
          </li>

          <li class="row">
            <a href="" class="col-12 col-sm-10">
              <div class="row">
                <div class="col">John Doe</div>
                <div class="col-3 d-none d-sm-block">1/1/2018</div>
                <div class="col-3 d-none d-sm-block">14/1/2018</div>
                <div class="col-2 d-none d-sm-block">1</div>
              </div>
            </a>
            <button type="button" class="btn btn-danger col">Update</button>
          </li>

          <li class="row">
            <a href="" class="col-12 col-sm-10">
              <div class="row">
                <div class="col">John Doe</div>
                <div class="col-3 d-none d-sm-block">1/1/2018</div>
                <div class="col-3 d-none d-sm-block">14/1/2018</div>
                <div class="col-2 d-none d-sm-block">1</div>
              </div>
            </a>
            <button type="button" class="btn btn-danger col">Update</button>
          </li>

        </ul>

        <button type="button" class="mt-4 btn btn-danger col">Add New Patient</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'locations'
  }
</script>
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.css" scoped></style>