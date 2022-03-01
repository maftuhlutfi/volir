const formFields = [
    {
        name: 'name',
        type: 'text',
        value: '',
        label: 'Nama',
        placeholder: 'Masukkan nama lowongan',
        required: true
    },
    {
        name: 'description',
        type: 'textarea',
        value: '',
        label: 'Deskripsi',
        placeholder: 'Masukkan deskripsi lowongan',
        required: true
    },
    {
        name: 'open',
        type: 'date-range',
        value: {
            start: '',
            end: ''
        },
        label: 'Tanggal Buka Lamaran'
    },
    {
        name: 'type',
        type: 'select',
        options: [
            {
                name: 'Takmir',
                value: 'takmir'
            },
            {
                name: 'Relawan',
                value: 'relawan'
            },
        ],
        value: '',
        label: 'Tipe Lowongan'
    },
    {
        name: 'event',
        type: 'select',
        options: [
            {
                name: 'Relawan 1',
                value: 'relawan 1'
            },
            {
                name: 'Relawan 2',
                value: 'relawan 2'
            },
        ],
        value: '',
        label: 'Kegiatan',
        condition: {
            name: 'type',
            value: 'relawan'
        }
    },
    {
        name: 'period',
        type: 'date-range',
        value: {
            start: '',
            end: ''
        },
        label: 'Periode'
    },
    {
        name: 'criteria',
        type: 'textarea',
        value: '',
        label: 'Kriteria Pelamar',
        placeholder: 'Masukkan kriteria pelamar \n- Misalkan kriteria 1',
        required: true
    },
    {
        name: 'benefit',
        type: 'textarea',
        value: '',
        label: 'Keuntungan',
        placeholder: 'Masukkan apa yang akan didapat oleh pelamar jika diterima \n- Misalkan keuntungan 1',
        required: true
    },
]

export default formFields