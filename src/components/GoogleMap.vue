<template>
  <div class="mb-4">
    <gmap-map
      :center="center"
      :zoom="zoom"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position;zoom=18"
        @dblclick="center=m.position;zoom=2"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 55.7317313, lng: 37.401249 },
      currentPlace: null,
      zoom: 2,
      markers: [
        {
          position: {
            lat: 55.7317313,
            lng: 37.401249,
          }
        },
        {
          position: {
            lat: 46.3582577,
            lng: 48.1098224,
          }
        },
        {
          position: {
            lat: 55.7872527,
            lng: 49.1176516,
          }
        },
        {
          position: {
            lat: 59.9289758,
            lng: 30.3261993,
          }
        },
        {
          position: {
            lat: 56.0268416,
            lng: 92.72531,
          }
        },                                
      ]
    };
  },

  mounted() {
    // this.geolocate();
  },

  methods: {
  }
};
</script>