<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent pl-0" style="padding-top:0.7rem;padding-bottom:0.7rem">
                <li class="breadcrumb-item"><a href="#">Layanan Surat</a></li>
                <li class="breadcrumb-item"><a href="#">Surat Keluar</a></li>
            </ol>
        </nav>
        <div class="list-group list-group-flush mt-3">
            <a href="#!" class="list-group-item list-group-item-action" v-for="(outbox, index) in getSuratKeluar" :key="index">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <!-- Avatar -->
                        <img alt="Image placeholder" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-1.jpg" class="avatar rounded-circle">
                    </div>
                    <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 class="mb-0 text-sm">{{ outbox.perihal }}</h4>
                            </div>
                            <div class="text-right">
                                <small>{{ outbox.jenisSurat }}, {{ outbox.derajatSurat }}</small>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="text-sm mb-0">{{ outbox.tanggal | moment }}</p>
                            </div>
                            <div class="text-right text-muted">
                                <small>{{ outbox.tujuan }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <!-- <a href="#!" class="list-group-item list-group-item-action">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <img alt="Image placeholder" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-2.jpg" class="avatar rounded-circle">
                    </div>
                    <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 class="mb-0 text-sm">John Snow</h4>
                            </div>
                            <div class="text-right text-muted">
                                <small>3 hrs ago</small>
                            </div>
                        </div>
                        <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                    </div>
                </div>
            </a> -->
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    computed: {
        getSuratKeluar(){
            return this.$store.state.outbox
        },
    },
    created(){
        this.$store.dispatch('getSuratKeluar')
    },
    filters: {
        moment: function(value){
            moment.locale('id'); 
            return moment(value).format('dddd')+', '+moment(value).format('LL');
        },
    }
}
</script>