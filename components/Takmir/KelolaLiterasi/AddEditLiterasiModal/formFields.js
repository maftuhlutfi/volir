const formFields = [
    {
        name: 'title',
        type: 'text',
        value: '',
        label: 'Judul',
        placeholder: 'Masukkan judul literasi',
        required: true
    },
    {
        name: 'type',
        type: 'select',
        options: [
            {
                name: 'Artikel',
                value: 'article'
            },
            {
                name: 'Video',
                value: 'video'
            },
        ],
        value: '',
        label: 'Tipe Literasi'
    },
    {
        name: 'link',
        type: 'text',
        value: '',
        label: 'Link Video',
        placeholder: 'Masukkan link video (Youtube)',
        condition: {
            name: 'type',
            value: 'video'
        }
    },
    {
        name: 'content',
        type: 'rich-text',
        value: '',
        label: 'Konten',
        placeholder: 'Tulis konten artikel',
        required: true,
        modules: {
            toolbar: [
                [{ 'header': [2, 3, false] }],
                ['bold', 'italic'],
                ['link', 'image'],
                [{ 'color': [] }],
                [{ 'align': [] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
            ]
        }
    },
]

export default formFields