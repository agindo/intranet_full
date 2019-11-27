<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent pl-0" style="padding-top:0.7rem;padding-bottom:0.7rem">
                <li class="breadcrumb-item"><a href="#">Layanan Surat</a></li>
                <li class="breadcrumb-item"><a href="#">Tanda Tangan Digital</a></li>
            </ol>
        </nav>
        <div class="flex flex-col">
            <div class="text-gray-700 text-center px-4 py-2 m-2">&nbsp;</div>
            <div class="text-gray-700 text-center px-4 py-2 m-2">
                <base-button type="secondary" @click="modals.modal0 = true">Register Tanda Tangan Digital</base-button>
            </div>
            <div class="text-gray-700 text-center px-4 py-2 m-2">&nbsp;</div>
        </div>
        <modal size="lg" :show.sync="modals.modal0">
            <template slot="header">
                <h5 class="modal-title" id="exampleModalLabel">Register Tanda Tangan Digital</h5>
            </template>
            <div>

<form>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">NIK</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="" placeholder="NIK" v-model="tandaTangan.nik">
            <small class="form-text text-muted" v-if="alert.nik">tidak boleh kosong</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">Nama Lengkap</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="" placeholder="Nama Lengkap" v-model="tandaTangan.nama_lengkap">
            <small class="form-text text-muted" v-if="alert.nama_lengkap">tidak boleh kosong</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">Email</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="" placeholder="Email" v-model="tandaTangan.email">
            <small class="form-text text-muted" v-if="alert.email">tidak boleh kosong</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">No.Telepon/HP</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="" placeholder="No.Telepon/HP" v-model="tandaTangan.no_telepon">
            <small class="form-text text-muted" v-if="alert.no_telepon">tidak boleh kosong</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">Kota</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="" placeholder="Kota" v-model="tandaTangan.kota">
            <small class="form-text text-muted" v-if="alert.kota">tidak boleh kosong</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">Provinsi</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="" placeholder="Provinsi" v-model="tandaTangan.provinsi">
            <small class="form-text text-muted" v-if="alert.provinsi">tidak boleh kosong</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">NIP</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="" placeholder="NIP" v-model="tandaTangan.nip">
            <small class="form-text text-muted" v-if="alert.nip">tidak boleh kosong</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">Jabatan</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="" placeholder="Jabatan" v-model="tandaTangan.jabatan">
            <small class="form-text text-muted" v-if="alert.jabatan">tidak boleh kosong</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">Unit Kerja</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="" placeholder="Unit Kerja" v-model="tandaTangan.unit_kerja">
            <small class="form-text text-muted" v-if="alert.unit_kerja">tidak boleh kosong</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">&nbsp;</label>
        <div class="col-sm-9">
            <small class="form-text">Gambar Tanda Tangan (.png)</small>
            <input type="file" class="form-control" id="" placeholder="" @change="filesTandaTangan" ref="filesTandaTangan">
            <small class="form-text text-muted" v-if="alert.tandaTangan">menggunakan file .png</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">&nbsp;</label>
        <div class="col-sm-9">
            <small class="form-text">KTP (.png)</small>
            <input type="file" class="form-control" id="" placeholder="" @change="filesKtp" ref="filesKtp">
            <small class="form-text text-muted" v-if="alert.ktp">menggunakan file .png</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label text-right">&nbsp;</label>
        <div class="col-sm-9">
            <small class="form-text">Surat Rekomendasi (.pdf)</small>
            <input type="file" class="form-control" id="" placeholder="" @change="filesSuratRekomendasi" ref="filesSuratRekomendasi">
            <small class="form-text text-muted" v-if="alert.suratRekomendasi">menggunakan file .pdf</small>
        </div>
    </div>
</form>

            </div>
            <template slot="footer">
                <base-button type="secondary" @click="modals.modal0 = false">Close</base-button>
                <base-button type="primary" @click="submitData">Save changes</base-button>
            </template>
        </modal>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            modals: { modal0: false },
            tandaTangan: {nik: null, nama_lengkap: null, email: null, no_telepon: null, provinsi: null, kota: null, nip: null, jabatan: null, unit_kerja: null},
            alert: {tandaTangan: false, ktp: false, suratRekomendasi: false, nik: false, nama_lengkap: false, email: false, no_telepon: false, provinsi: false, kota: false, nip: false, jabatan: false, unit_kerja: false},
            files: []
        }
    },
    methods: {
        filesChange(files) {
            this.files = files
        },
        filesTandaTangan() {
            var filesOne = this.$refs.filesTandaTangan.files[0]
            if (filesOne.type != 'image/png') {
                this.alert.tandaTangan = true
            }else{
                this.alert.tandaTangan = false
            }
        },
        filesKtp() {
            var filesTwo = this.$refs.filesKtp.files[0]
            if (filesTwo.type != 'image/png') {
                this.alert.ktp = true
            }else{
                this.alert.ktp = false
            }
        },
        filesSuratRekomendasi() {
            var filesThree = this.$refs.filesSuratRekomendasi.files[0]
            if (filesThree.type != 'application/pdf') {
                this.alert.suratRekomendasi = true
            }else{
                this.alert.suratRekomendasi = false
            }
        },
        submitData: function() {
            if (this.tandaTangan.nik == null) {
                this.alert.nik = true
            }

            if (this.tandaTangan.nama_lengkap == null){
                this.alert.nama_lengkap = true
            }

            if (this.tandaTangan.email == null) {
                this.alert.email = true
            }

            if (this.tandaTangan.no_telepon == null) {
                this.alert.no_telepon = true
            }

            if (this.tandaTangan.kota == null) {
                this.alert.kota = true
            }

            if (this.tandaTangan.provinsi == null) {
                this.alert.provinsi = true
            }

            if (this.tandaTangan.nip == null) {
                this.alert.nip = true
            }

            if (this.tandaTangan.jabatan == null) {
                this.alert.jabatan = true
            }

            if (this.tandaTangan.unit_kerja == null) {
                this.alert.unit_kerja = true
            }



            if (this.tandaTangan.nik != null && this.tandaTangan.nama_lengkap != null && this.tandaTangan.email != null && this.tandaTangan.no_telepon != null && this.tandaTangan.kota != null && this.tandaTangan.provinsi != null && this.tandaTangan.nip != null && this.tandaTangan.jabatan != null && this.tandaTangan.unit_kerja != null) {
                let url = 'http://103.123.66.199/api/user/registrasi?nik='+this.nik+'&nama='+this.nama+'&email='+this.email+'&nomor_telepon='+this.no_telepon+'&kota='+this.kota+'&provinsi='+this.provinsi+'&nip='+this.nip+'&jabatan='+this.jabatan+'&unit_kerja='+this.unit_kerja
                let headers = { 'Authorization': 'Bearer 1077e2ca-7c8e-484e-85d8-0284a7bef30f', 'Content-Type': 'application/x-www-form-urlencoded' }

                var fileOne = this.$refs.filesTandaTangan.files[0]
                var fileTwo = this.$refs.filesKtp.files[0]
                var fileThree = this.$refs.filesSuratRekomendasi.files[0]
                var formKata = new FormData()
                    formKata.append('nik', this.tandaTangan.nik)
                    formKata.append('nama', this.tandaTangan.nama_lengkap)
                    formKata.append('email', this.tandaTangan.email)
                    formKata.append('nomor_telepon', this.tandaTangan.no_telepon)
                    formKata.append('kota', this.tandaTangan.kota)
                    formKata.append('provinsi', this.tandaTangan.provinsi)
                    formKata.append('nip', this.tandaTangan.nip)
                    formKata.append('jabatan', this.tandaTangan.jabatan)
                    formKata.append('unit_kerja', this.tandaTangan.unit_kerja)
                    formKata.append('image_ttd', fileOne)
                    formKata.append('ktp', fileTwo)
                    formKata.append('surat_rekomendasi', fileThree)

                axios.post(url, formKata, {headers: headers})
                .then(response => {
                    if(response.status == 200){
                        this.modals.modal0 = false
                        this.$notify({type: 'info', message: 'Berhasil disimpan'})
                    }else{
                        this.modals.modal0 = true
                    }
                })
                .catch(error => {
                    console.log(error);
                })
                // console.log('nik: '+this.tandaTangan.nik);
                // console.log('nama_lengkap: '+this.tandaTangan.nama_lengkap);
                // console.log('email: '+this.tandaTangan.email);
                // console.log('no_telepon: '+this.tandaTangan.no_telepon);
                // console.log('kota: '+this.tandaTangan.kota);
                // console.log('provinsi: '+this.tandaTangan.provinsi);
                // console.log('nip: '+this.tandaTangan.nip);
                // console.log('jabatan: '+this.tandaTangan.jabatan);
                // console.log('unit_kerja: '+this.tandaTangan.unit_kerja);
                // this.modals.modal0 = false
            }
        }
    }
}
</script>