<template>
    <div>
        <base-header class="pb-6">
            <div class="row align-items-center py-4">
                <div class="col-lg-6 col-7">
                    <!-- <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
                    <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                        <route-bread-crumb></route-bread-crumb>
                    </nav> -->
                </div>
                <!-- <div class="col-lg-6 col-5 text-right">
                <base-button size="sm" type="neutral">New</base-button>
                <base-button size="sm" type="neutral">Filters</base-button>
                </div> -->
            </div>
            <!-- Card stats -->
            <div class="row">
        
            </div>
        </base-header>
        <div class="container-fluid mt--6">
            <!-- <div class="row starter-page"> -->
            <div class="starter-page">
                <div class="card-deck">
                    <card>
                        <div class="flex justify-between items-center">
                            <div class="pl-3 ml-2 mb-4 mt-3">
                                <p class="text-lg">Absen Kehadiran</p>
                            </div>
                        </div>
                        <!-- <div class="flex justify-between bg-gray-200">
                            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">#</div>
                            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Hari, Tanggal</div>
                            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Jam Masuk</div>
                            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Jam Keluar</div>
                            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Keterangan</div>
                        </div>
                        <div v-for="(absen, index) in getAbsen" :key="index">
                            <div class="flex justify-between bg-gray-200" v-if="absen.tgl_masuk != null">
                                <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">{{ index }}</div>
                                <div class="text-gray-700 bg-gray-400 px-4 py-2 m-2">{{ absen.tgl_masuk | splite}}</div>
                                <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">{{ absen.jam_masuk }}</div>
                                <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">{{ absen.jam_keluar }}</div>
                                <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Keterangan</div>
                            </div>
                        </div> -->
                        <table class="table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Hari, Tanggal</th>
                                    <th scope="col">Jam Masuk</th>
                                    <th scope="col">Jam Keluar</th>
                                    <th scope="col">Keterangan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(absen, index) in getAbsen" :key="index">
                                    <td class="border-transparent">{{index+1}}</td>
                                    <td>{{absen.tgl_masuk | splite }}</td>
                                    <td>{{absen.jam_masuk}}</td>
                                    <td v-if="absen.jam_keluar == absen.jam_masuk">-</td>
                                    <td v-if="absen.jam_keluar != absen.jam_masuk">{{absen.jam_keluar}}</td>
                                    <td>{{absen.jam_masuk | telat}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    computed: {
        getAbsen(){
            return this.$store.state.absen
        }
    },
    created(){
        this.$store.dispatch('getAbsen')
    },
    filters: {
        moment: function(value){
            moment.locale('id'); 
            return moment(value).format('dddd')+', '+moment(value).format('LL');
        },
        telat: function(value){
            if (value > '07:30:00') {
                return 'Terlambat Masuk'
            }else{
                return ""
            }
        },
        splite: function(value){
            if (value != null) {
                var ab = ''+value
                var cd = ab.split('-')
                var ef =  cd[2]+'-'+cd[1]+'-'+cd[0]
                moment.locale('id');
                return moment(ef).format('dddd')+', '+moment(ef).format('LL')
            }else{
                return '-'
            }
            
        }
    },
}
</script>
<style>
    .starter-page {
        min-height: calc(100vh - 380px);
    }
</style>
