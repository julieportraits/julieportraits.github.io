vueComps.gallery = {
  props: ['images'],
  template: `
  <div id="gallery">
    <div class="container-fluid bg-3 text-center">    
      <h3>Previous Commissions</h3><br>
      <div v-for="row in images" class="row">
        <div v-for="img in row" class="col-sm-6">
          <div class="thumbnail">
            <img v-bind:src="img.path" class="img-responsive" style="width:100%" alt="Dog image">
            <div class="caption">
              <p>{{ img.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
}