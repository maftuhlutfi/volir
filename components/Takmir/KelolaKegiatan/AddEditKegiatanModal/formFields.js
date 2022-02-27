const formFields = [
    {
        name: 'name',
        type: 'text',
        value: '',
        label: 'Nama',
        placeholder: 'Masukkan nama kegiatan',
        required: true
    },
    {
        name: 'description',
        type: 'textarea',
        value: '',
        label: 'Deskripsi',
        placeholder: 'Masukkan deskripsi kegiatan',
        required: true
    },
    {
        name: 'totalParticipants',
        type: 'number',
        value: '',
        label: 'Total Peserta',
        placeholder: 'Masukkan batasan peserta (kosongkan jika tidak ada)'
    },
    {
        name: 'type',
        type: 'select',
        options: [
            {
                name: 'Kajian',
                value: 'kajian'
            },
            {
                name: 'Kerja Bakti',
                value: 'kerja bakti'
            },
        ],
        value: '',
        label: 'Tipe Kegiatan'
    },
    {
        name: 'price',
        type: 'number',
        value: '',
        label: 'Biaya Pendaftaran',
        placeholder: 'Masukkan biaya (kosongkan jika gratis)'
    },
    {
        name: 'date',
        type: 'date',
        value: new Date(),
        label: 'Tanggal Kegiatan'
    },
    {
        name: 'penceramah',
        type: 'text',
        value: '',
        label: 'Penceramah (Jka Ada)'
    },
    {
        name: 'poster',
        type: 'image',
        value: null,
        label: 'Poster'
    }
]

export default formFields