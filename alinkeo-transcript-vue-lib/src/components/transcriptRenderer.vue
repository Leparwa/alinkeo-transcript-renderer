<template>
   <div>
    <p>
      {{ transcriptsRenderer }}
    </p>
    </div>
</template>
  <script>
  import { intializeProssMirror } from 'alinkeo-transcript-renderer'
  export default {
    data () {
      return {
        transcriptWords:'this are the transcript words that will be rendered in pros-mirror editor' 
      }
    },
    computed: {
      // this method runs ounce the library is installed. Think of it as ngOnit() in angular
      transcriptsRenderer () {
        return `${this.transcriptWords}`
      }
    },
    methods: {
      // here is where we define methods that will called on demand. 

      // Example of methods that could be implemented inside this life-hook cycle. 
      getTranscripts (){
        const transcriptContent = intializeProssMirror('you are now here')
        return transcriptContent
      }
    
    }
  }
  </script>