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
        <!-- <div class="col-xl-3 col-md-6">
          <stats-card title="Total traffic"
                      type="gradient-red"
                      sub-title="350,897"
                      icon="ni ni-active-40">

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div> -->
        <!-- <div class="col-xl-4 col-md-6">
          <stats-card title="Total traffic"
                      type="gradient-orange"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35">

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div> -->
        <!-- <div class="col-xl-4 col-md-6">
          <stats-card title="Sales"
                      type="gradient-green"
                      sub-title="924"
                      icon="ni ni-money-coins">

            <template slot="footer">
              <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>

        </div> -->
        <!-- <div class="col-xl-4 col-md-6">
          <stats-card title="Performance"
                      type="gradient-info"
                      sub-title="49,65%"
                      icon="ni ni-chart-bar-32">

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div> -->
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <!-- <div class="row starter-page"> -->
      <div class="starter-page">
        <div class="card-deck">
          <card>
    <!-- <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
    <div class="row">
      <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <span>
          <base-button block type="primary" class="mb-3" @click="modals.modal0 = true">Buat Surat</base-button>
  <modal size="lg" :show.sync="modals.modal0">
    <template slot="header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
    </template>
    <div>
      <div class="row">
        <div class="col mb-3">
          <label>Jenis Surat</label>
          <base-input alternative>
            <select class="form-control" v-model="surat.jenisSurat">
              <option>...</option>
              <option v-for="(option1, index) in options1" :key="index" :value="option1.value">{{option1.text}}</option>
            </select>
          </base-input>
          <small class="form-text text-muted mb-1" v-if="alertSurat.jenisSurat">tidak boleh kosong</small>
        </div>
        <div class="col">
          <label>Sifat Surat</label>
          <base-input alternative>
            <select class="form-control" v-model="surat.klasifikasiSurat">
              <option>...</option>
              <option v-for="(option2, index) in options2" :key="index" :value="option2.value">{{option2.text}}</option>
            </select>
          </base-input>
          <small class="form-text text-muted mb-1" v-if="alertSurat.klasifikasiSurat">tidak boleh kosong</small>
        </div>
        <div class="col">
          <label>Derajat Surat</label>
          <base-input alternative>
            <select class="form-control" v-model="surat.derajatSurat">
              <option>...</option>
              <option v-for="(option3, index) in options3" :key="index" :value="option3.value">{{option3.text}}</option>
            </select>
          </base-input>
          <small class="form-text text-muted mb-1" v-if="alertSurat.derajatSurat">tidak boleh kosong</small>
        </div>
      </div>
      <div class="row">
        <div class="col mb-3">
          <label>Box Penyimpanan Surat</label>
          <base-input alternative v-model="surat.rakSurat" placeholder="..."></base-input>
          <small class="form-text text-muted mb-1" v-if="alertSurat.rakSurat">tidak boleh kosong</small>
        </div>
        <div class="col">
          <label>Tanggal Surat</label>
          <base-input alternative>
            <flat-picker slot-scope="{focus, blur}"
                          @on-open="focus"
                          @on-close="blur"
                          :config="{allowInput: true}"
                          class="form-control datepicker"
                          v-model="surat.tglSurat">
            </flat-picker>
          </base-input>
        </div>
      </div>
      <div class="form-group pb-3">
        <label>Dari Asal Instansi/Satker/Unit Kerja</label>
        <base-input alternative v-model="surat.instansiAsal" placeholder="..."></base-input>
        <small class="form-text text-muted mb-1" v-if="alertSurat.instansiAsal">tidak boleh kosong</small>
      </div>
      <div class="form-group pb-3">
        <label>Nomor Surat</label>
        <base-input alternative v-model="surat.nomorSurat" placeholder="..."></base-input>
        <small class="form-text text-muted mb-1" v-if="alertSurat.nomorSurat">tidak boleh kosong</small>
      </div>
      <div class="form-group pb-3">
        <label>Perihal</label>
        <base-input alternative v-model="surat.perihal" placeholder="..."></base-input>
        <small class="form-text text-muted mb-1" v-if="alertSurat.perihal">tidak boleh kosong</small>        
      </div>
  <div class="row">
    <div class="col-10 pr-0 mb-3">
      <div class="form-group">
        <label>Tujuan</label>
        <multiselect v-model="surat.valueTujuan" :options="options5"></multiselect>
        <!-- <v-select :options="options5" class="p-2" v-model="surat.valueTujuan"></v-select> -->
        <!-- <base-input alternative placeholder="..."></base-input> -->
        <span v-if="msg != null">
          <small id="" class="form-text text-muted">{{msg}}</small>
        </span>
        <span v-if="penerimaRequests.length != 0">
          <span v-for="(req, index) in penerimaRequests" :key="index">
            <p class="ml-2 mb-2 mt-2">{{index+1}}. {{req.penerima}}</p> 
          </span>
        </span>
      </div>
    </div>
    <div class="col">
      <base-button outline type="secondary" style="margin-top:32px" @click="addTujuan">Add</base-button>
    </div>
  </div>
      <span v-if="surat.jenisSurat == 'Surat Undangan'">
        <div class="form-group pb-3">
          <label>Lokasi</label>
          <base-input alternative v-model="surat.lokasi" placeholder="..."></base-input>
          <small class="form-text text-muted mb-1" v-if="alertSurat.lokasi">tidak boleh kosong</small>
        </div>
        <div class="row">
          <div class="col mb-3">
            <div class="form-group">
              <label>Tanggal Mulai</label>
              <base-input alternative addon-left-icon="ni ni-calendar-grid-58">
                <flat-picker slot-scope="{focus, blur}"
                              @on-open="focus"
                              @on-close="blur"
                              :config="{allowInput: true}"
                              class="form-control datepicker"
                              v-model="surat.tglMulai">
                </flat-picker>
              </base-input>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
                <label>Tanggal Selesai</label>
                <base-input alternative addon-left-icon="ni ni-calendar-grid-58">
                    <flat-picker slot-scope="{focus, blur}"
                            @on-open="focus"
                            @on-close="blur"
                            :config="{allowInput: true}"
                            class="form-control datepicker"
                            v-model="surat.tglSelesai">
                    </flat-picker>
                </base-input>
            </div>
          </div>
        </div>
      </span>
      <div class="form-group pb-3">
        <label>Lampiran</label>
        <base-input alternative v-model="surat.lampiran" placeholder="..."></base-input>
        <small class="form-text text-muted mb-1" v-if="alertSurat.lampiran">tidak boleh kosong</small>
      </div>
      <div class="form-group pb-3">
        <label>Catatan</label>
        <base-input alternative v-model="surat.catatan" placeholder="..."></base-input>
        <small class="form-text text-muted mb-1" v-if="alertSurat.catatan">tidak boleh kosong</small>
      </div>
      <div class="form-group">
        <label>Upload File (.pdf)</label>
        <file-input @change="filesChange" ref="fileSurat" id="fileSurat"></file-input>
        <small class="form-text text-muted" v-if="alertPDF">Harus file .pdf</small>
      </div>
    </div>
    <template slot="footer">
      <base-button type="secondary" @click="modals.modal0 = false">Close</base-button>
      <base-button type="primary" @click="submitData">Save changes</base-button>
    </template>
  </modal>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center cursor-pointer hover:bg-blue-100" @click="getViews('surat_masuk')">
              Surat Masuk
              <badge type="primary" pill>14</badge>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center cursor-pointer hover:bg-blue-100" @click="getViews('surat_keluar')">
              Surat Keluar
              <badge type="primary" pill>2</badge>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center cursor-pointer hover:bg-blue-100" @click="getViews('disposisi_masuk')">
              Disposisi Masuk
              <badge type="primary" pill>1</badge>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center cursor-pointer hover:bg-blue-100" @click="getViews('tanda_tangan_digital')">
              Tanda Tangan Digital
              <badge type="primary" pill>1</badge>
            </li>
          </ul>
        </span>
      </div>
      <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9">
        <span>
          

<router-view></router-view>


        </span>
      </div>
    </div>
  </card>
</div>

      </div>
    </div>
  </div>
</template>
<script>
  import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb';
  import StatsCard from '@/components/Cards/StatsCard';
  import flatPicker from "vue-flatpickr-component";
  import "flatpickr/dist/flatpickr.css";
  import FileInput from '@/components/Inputs/FileInput';
  // import vSelect from 'vue-select'
  // import 'vue-select/dist/vue-select.css';
  import axios from 'axios';
  // import router from 'vue-router'
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'starter-page',
    components: {
      StatsCard,
      RouteBreadCrumb,
      flatPicker,
      FileInput,
      // vSelect
      Multiselect
    },
    data() {
      return {
        modals: { modal0: false },
        surat: {
          jenisSurat: null, 
          klasifikasiSurat: null, 
          derajatSurat: null, 
          rakSurat: null,
          tglSurat: new Date(),
          instansiAsal: null,
          nomorSurat: null,
          perihal: null,
          lokasi: null,
          tglMulai: new Date(),
          tglSelesai: new Date(),
          lampiran: null,
          catatan: null,
          valueTujuan: null
        },
        alertSurat: {
          jenisSurat: false, 
          klasifikasiSurat: false, 
          derajatSurat: false, 
          rakSurat: false,
          tglSurat: new Date(),
          instansiAsal: false,
          nomorSurat: false,
          perihal: false,
          lokasi: false,
          tglMulai: new Date(),
          tglSelesai: new Date(),
          lampiran: false,
          catatan: false,
          valueTujuan: false
        },
        options1:[
          {text:'Surat Edaran', value:'Surat Edaran'},
          {text:'Surat Pemberitahuan', value:'Surat Pemberitahuan'},
          {text:'Surat Undangan', value:'Surat Undangan'},
          {text:'Surat Permintaan Data', value:'Surat Permintaan Data'},
          {text:'Nota Dinas', value:'Nota Dinas'}            
        ],
        options2:[
          {text:'Bebas', value:'Bebas'},
          {text:'Rahasia', value:'Rahasia'}           
        ],
        options3:[
          {text:'Biasa', value:'Biasa'},
          {text:'Penting', value:'Penting'},
          {text:'Segera', value:'Segera'},
          {text:'Sangat Segera', value:'Sangat Segera'}          
        ],
        options5: [],
        penerimaRequests: [],
        tujuan: {},
        msg: null,
        alertPDF: false
      }
    },
    mounted(){
      this.getTujuan()
    },
    methods: {
      getViews: function(value){
        this.$router.push({ name: value })
      },
      filesChange() {
        var file = this.$refs.fileSurat.files[0]
        if(file.type != 'application/pdf'){
          this.alertPDF = true
        }else{
          this.alertPDF = false
          this.files = this.$refs.fileSurat.files[0]
        }
      },
      getTujuan: function(){
        let url = 'https://intranet.lan.go.id:8445/employee/ambilsemua'
        let headers = {
          'Authorization': 'Bearer '+ this.$store.getters.getToken 
        }
        axios.get(url, {headers: headers})
        .then(response => {
          this.getAll = response.data
          for (let i = 0; i < response.data.length; i++) {
            const element = response.data[i];
            this.options5.push(element.nama)
          }
        })
        .catch(error => {
          console.log(error)
        })
      },
      addTujuan: function(){
        if(this.surat.valueTujuan == null){
          this.msg = "don't empty"
        }else if(this.surat.valueTujuan == ''){
          this.msg = "don't empty"
        }else{
          this.msg = null
          for (let i = 0; i < this.getAll.length; i++) {
            const element = this.getAll[i];
            if (element.nama == this.surat.valueTujuan) {
              this.tujuan = {'penerima': element.username}
              this.penerimaRequests.push(this.tujuan)
            }
          }
          this.surat.valueTujuan = null
        }
      },
      submitData: function() {
        if (this.surat.jenisSurat == null) {
          this.alertSurat.jenisSurat = true
        }

        if (this.surat.klasifikasiSurat == null) {
          this.alertSurat.klasifikasiSurat = true
        }

        if (this.surat.derajatSurat == null) {
          this.alertSurat.derajatSurat = true
        }

        if (this.surat.rakSurat == null) {
          this.alertSurat.rakSurat = true
        }

        if (this.surat.instansiAsal == null) {
          this.alertSurat.instansiAsal = true
        }

        if (this.surat.nomorSurat == null) {
          this.alertSurat.nomorSurat = true
        }

        if (this.surat.perihal == null) {
          this.alertSurat.perihal = true
        }

        // if (this.surat.lokasi == null) {
        //   this.alertSurat.lokasi = true
        // }

        if (this.surat.lampiran == null) {
          this.alertSurat.lampiran = true
        }

        if (this.surat.catatan == null) {
          this.alertSurat.catatan = true
        }

        if (this.surat.jenisSurat != null && this.surat.klasifikasiSurat != null && this.surat.derajatSurat != null && this.surat.rakSurat != null && this.surat.instansiAsal != null && this.surat.nomorSurat != null && this.surat.perihal != null && this.surat.lampiran != null && this.surat.catatan != null) {
          let url = 'https://intranet.lan.go.id:8446/surat/simpanSuratMasuk'
          let headers = {
            'Authorization': 'Bearer '+ this.$store.getters.getToken,
            'Content-Type': 'application/x-www-form-urlencoded'
          }

          let suratJson = {
            "klasifikasiSurat": this.surat.klasifikasiSurat,
            "derajatSurat": this.surat.derajatSurat,
            "nomorSurat": this.surat.nomorSurat,
            "rakSurat": this.surat.rakSurat,
            "jenisSurat": this.surat.jenisSurat,
            "instansiAsal": this.surat.instansiAsal, 
            "tanggalSurat": this.surat.tglSurat,
            "perihal": this.surat.perihal,
            "tanggalMulai": this.surat.tglMulai,
            "tanggalSelesai": this.surat.tglSelesai,
            "lokasi": this.surat.lokasi,
            "lampiran": this.surat.lampiran,
            "catatan" : this.surat.catatan,
            "penerimaRequests" : this.penerimaRequests
          }

          var fileSurat = this.$refs.fileSurat.files[0]
          var formKata = new FormData()
              formKata.append('fileSurat', fileSurat)
              formKata.append('suratJson', JSON.stringify(suratJson))
              // this.$store.dispatch('post_test', fileSurat)

          axios.post(url, formKata, {headers: headers})
          .then(response => {
            if(response.status == 200){
              this.modals.modal0 = false
              this.$notify({type: 'info', message: 'Surat berhasil dikirim'})
              this.$router.push({path: '/layanan_surat'})
            }else{
              this.modals.modal0 = true
              this.$notify({type: 'danger', message: 'Suara gagal dikirim'})
            }
          })
          .catch(error => {
            console.log(error);
          })

          // console.log('Jenis Surat: '+this.surat.jenisSurat);
          // console.log('Sifat Surat: '+this.surat.klasifikasiSurat);
          // console.log('Derajat Surat: '+this.surat.derajatSurat);
          // console.log('Box Penyimpanan Surat: '+this.surat.rakSurat);
          // console.log('Tanggal Surat: '+this.surat.tglSurat);
          // console.log('Dari Asal Instansi/Satker/Unit Kerja: '+this.surat.instansiAsal);
          // console.log('Nomor Surat: '+this.surat.nomorSurat);
          // console.log('Perihal: '+this.surat.perihal);
          // console.log(this.penerimaRequests);
          // console.log('Lokasi: '+this.surat.lokasi);
          // console.log('Tanggal Mulai: '+this.surat.tglMulai);
          // console.log('Tanggal Selesai: '+this.surat.tglSelesai);
          // console.log('Lampiran: '+this.surat.lampiran);
          // console.log('Catatan: '+this.surat.catatan);
          // console.log(this.$refs.fileSurat.files[0]);
          // this.modals.modal0 = false 
        }
      }
    }
  };
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .starter-page {
    min-height: calc(100vh - 380px);
  }

  .form-group {
    margin-bottom: 0 !important;
  }
</style>
