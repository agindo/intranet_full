<template>
    <div>
        <span v-if="id == 0">
            {{ this.$router.push({name: 'surat_masuk'}) }}
        </span>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent pl-0" style="padding-top:0.7rem;padding-bottom:0.7rem">
                <li class="breadcrumb-item"><a href="#">Layanan Surat</a></li>
                <li class="breadcrumb-item"><a href="#">Surat Masuk</a></li>
                <li class="breadcrumb-item"><a href="#">Detail</a></li>
                <li class="breadcrumb-item"><a href="#">{{ id }}</a></li>
            </ol>
        </nav>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            id: this.$route.params.id | 0,
            mail: {}
        }
    },
    mounted(){
        this.getDetail()
    },
    methods: {
        getDetail: function() {
            let url = 'https://intranet.lan.go.id:8446/surat/inbox/'+this.id
            let headers = { 'Authorization': 'Bearer '+ localStorage.getItem('token') }
            axios.get(url, {headers: headers})
            .then(response => {
                this.mail = response.data
                console.log(this.mail)
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>