<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent pl-0" style="padding-top:0.7rem;padding-bottom:0.7rem">
                <li class="breadcrumb-item"><a href="#">Layanan Surat</a></li>
                <li class="breadcrumb-item"><a href="#">Surat Masuk</a></li>
            </ol>
        </nav>
        <!-- <div class="list-group list-group-flush mt-3"> -->
        <div class="list-group list-group-flush" v-for="(inbox, index) in getSuratMasuk" :key="index">
            <div v-if="inbox.statusApp == 'Surat Masuk'">
            <a href="#!" class="list-group-item list-group-item-action" :class="inbox.status === 'buka' ? 'bg-green-100' : ''" @click="getDetail(inbox.idSurat)">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <!-- Avatar -->
                        <img alt="Image placeholder" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-1.jpg" class="avatar rounded-circle">
                    </div>
                    <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 class="mb-0 text-sm">{{ inbox.perihal }}</h4>
                            </div>
                            <div class="text-right">
                                <small>{{ inbox.jenisSurat }}, {{ inbox.derajatSurat }}</small>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <!-- <h4 class="mb-0 text-sm">John Snow</h4> -->
                                <p class="text-sm mb-0">{{ inbox.tanggal | moment }}</p>
                            </div>
                            <div class="text-right text-muted">
                                <small>{{ inbox.tujuan }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    computed: {
        getSuratMasuk(){
            return this.$store.state.inbox
        },
    },
    created(){
        this.$store.dispatch('getSuratMasuk')
    },
    filters: {
        moment: function(value){
            moment.locale('id'); 
            return moment(value).format('dddd')+', '+moment(value).format('LL');
        }
    },
    methods: {
        getDetail: function(value){
            this.$router.push({name: 'surat_masuk_detail', params: {id: value}})
        }
    }
}
</script>