<template>
    <div>
      <div class="card-body pb-0">
        <h5 class="card-title">SDLC Progress</h5>
  
        <div id="sdlcProgressChart" style="min-height: 400px;">
            <div class="card-body pb-0">
              <h5 class="card-title">Website Traffic <span>| Today</span></h5>

              <div id="trafficChart" style="min-height: 400px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;" class="echart" _echarts_instance_="ec_1695766501702"><div style="position: relative; width: 890px; height: 400px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas data-zr-dom-id="zr_0" width="1112" height="500" style="position: absolute; left: 0px; top: 0px; width: 890px; height: 400px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div class="" style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px; transition: opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgb(255, 255, 255); border-width: 1px; border-radius: 4px; color: rgb(102, 102, 102); font: 14px / 21px &quot;Microsoft YaHei&quot;; padding: 10px; top: 0px; left: 0px; transform: translate3d(46px, 316px, 0px); border-color: rgb(145, 204, 117); pointer-events: none; visibility: hidden; opacity: 0;"><div style="margin: 0px 0 0;line-height:1;"><div style="font-size:14px;color:#666;font-weight:400;line-height:1;">Access From</div><div style="margin: 10px 0 0;line-height:1;"><div style="margin: 0px 0 0;line-height:1;"><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#91cc75;"></span><span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">Direct</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">735</span><div style="clear:both"></div></div><div style="clear:both"></div></div><div style="clear:both"></div></div></div></div>



             
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  import { getProjectProgressData } from '@/services/ProjectData'
  
  export default {
    name: 'HrProjectProgressCard',
        props: ['projectID'],
  
    data() {
      return {
        sdlcProgressData: {},
        chartOptions: {},
        pProjectID :''

      };
    },
  
    async created() {
        this.pProjectID = this.projectID
        console.log('SDLCProjectID ',this.pProjectID );
      this.sdlcProgressData =  await getProjectProgressData(this.pProjectID)

      console.log('this.sdlcProgressData ',this.sdlcProgressData );
      this.initializeChart(); // Initialize the chart
    },
  
    methods: {
      initializeChart() {
        const chartContainer = document.getElementById('sdlcProgressChart');
  
        if (chartContainer) {
          const chart = echarts.init(chartContainer);
          chart.setOption({
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)',
            },
            series: [
              {
                name: 'SDLC Progress',
                type: 'pie',
                radius: '70%',
                center: ['50%', '50%'],
                data: [
                  { value: this.sdlcProgressData.planning, name: 'Planning' },
                  { value: this.sdlcProgressData.analysis, name: 'Analysis' },
                  { value: this.sdlcProgressData.design, name: 'Design' },
                  { value: this.sdlcProgressData.implementation, name: 'Implementation' },
                  { value: this.sdlcProgressData.testing, name: 'Testing' },
                  { value: this.sdlcProgressData.deployment, name: 'Deployment' },
                  { value: this.sdlcProgressData.maintenance, name: 'Maintenance' },
                ],
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '18',
                    fontWeight: 'bold',
                  },
                },
              },
            ],
          });
        }
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  