<template>
   <div>
      <div class="item-wrapper">
         <h5>Normal Panel</h5>
         <Panel title="Plot 1 Bathroom" sub-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugiat. Veritatis assumenda iure beatae sequi corrupti quo temporibus, tempora illum sed. Obcaecati, voluptate beatae. Repudiandae perspiciatis illum aliquam unde non?
            " :collapsible="true" :options="panelOptions">
            <template v-slot:panelBody>
               <div class="panel-body-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus repellat vel labore quisquam impedit dolore, commodi, hic praesentium iusto, eum obcaecati delectus vitae ut consequatur dolores sint! Consectetur, sed?</p>
               </div>
            </template>
            <template v-slot:panelFooter>
               <div class="panel-footer-content">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum harum recusandae. Rem, nulla esse! Deserunt tempora eum, cum iusto ex sequi voluptatem exercitationem ratione in inventore cumque beatae excepturi!</p>
               </div>
            </template>
         </Panel>
      </div>
      <div class="item-wrapper">
         <h5>Accordion</h5>
         <Panel title="Plot 1 Bathroom" sub-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugiat. Veritatis assumenda iure beatae sequi corrupti quo temporibus, tempora illum sed. Obcaecati, voluptate beatae. Repudiandae perspiciatis illum aliquam unde non?
            " :collapsible="true" class="accordion">
            <template v-slot:panelBody>
               <div class="panel-body-content">
                  <hr>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus repellat vel labore quisquam impedit dolore, commodi, hic praesentium iusto, eum obcaecati delectus vitae ut consequatur dolores sint! Consectetur, sed?</p>
               </div>
            </template>
         </Panel>
      </div>
   </div>
</template>
<script>
export default {
    name: 'App',
    data () {
        return {
            panelOptions:{
                info:{
                    message:'lorem ipsum',
                    position:'left'
                },
                download: () => {
                    console.log('download');
                },
                refresh:()=>{
                    console.log('refresh');
                }
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.panel-body-content {
	padding: 1rem;
}
.panel-footer-content {
	padding: 0.5rem 1rem 1rem;
}
.accordion {
	hr {
		margin-top: 0;
		margin-bottom: 1rem;
	}
	.panel-body-content {
		padding-top: 0;
	}
}

</style>
