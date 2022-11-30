import { IBim, ICatalog, ICertificates, IQuestions } from "./tab_bim/Bim";

const bimData: IBim[] = [
  {
    id: 1,
    title: "Противопожарные клапаны",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae",
    img: "/images/BIM-1.png",
    date: "24.09.2019",
  },
  {
    id: 2,
    title: "AEROSTART",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae",
    img: "/images/BIM-2.svg",
    date: "09.09.2018",
  },
  {
    id: 3,
    title: "Воздушные каналы",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae",
    img: "/images/BIM-3.png",
    date: "04.09.2022",
  },
  {
    id: 4,
    title: "ЭКСПОРТ",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae",
    img: "/images/BIM-4.png",
    date: "11.10.2021",
  },
  {
    id: 5,
    title: "Вероса",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae",
    img: "/images/BIM-5.png",
    date: "12.09.2020",
  },
];

const catalogData: ICatalog[] = [
  {
    id: 1,
    title: "Центральные кондиционеры ВЕРОСА",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran1",
  },
  {
    id: 2,
    title: "Шкаф систем автоматического управления ШСАУ ВЕРСА 100",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran2",
  },
  {
    id: 3,
    title: "Кондиционеры компактные панельные Airmate®",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran3",
  },
  {
    id: 4,
    title: "Прецизионные кондиционеры АКП",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran4",
  },
  {
    id: 5,
    title: "Приточно-вытяжные установки для бассейнов АКВАРИС®",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran5",
  },
  {
    id: 6,
    title: "Приточно-вытяжные установки для бассейнов АКВАРИС®",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran5",
  },
  {
    id: 7,
    title: "Приточно-вытяжные установки для бассейнов АКВАРИС®",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran5",
  },
  {
    id: 8,
    title: "Приточно-вытяжные установки для бассейнов АКВАРИС®",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran5",
  },
  {
    id: 9,
    title: "Приточно-вытяжные установки для бассейнов АКВАРИС®",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran5",
  },
  {
    id: 10,
    title: "Приточно-вытяжные установки для бассейнов АКВАРИС®",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran5",
  },
  {
    id: 11,
    title: "Приточно-вытяжные установки для бассейнов АКВАРИС®",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran5",
  },
];

const sertificatesData: ICertificates[] = [
  {
    id: 1,
    image: "sertificat_1.jpg",
    download_url: "",
    category: "Название категории",
    parent: 0,
    alias: "sert1",
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 2,
    image: "sertificat_2.jpg",
    download_url: "",
    category: "Название категории",
    parent: 0,
    alias: "sert2",
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 3,
    image: "sertificat_3.jpg",
    download_url: "",
    category: "Название категории",
    parent: 0,
    alias: "sert3",
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 4,
    image: "sertificat_4.jpg",
    download_url: "",
    category: "Название категории",
    parent: 0,
    alias: "sert4",
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 5,
    image: "sertificat_3.jpg",
    download_url: "",
    category: "Название категории",
    parent: 0,
    alias: "sert3",
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 6,
    image: "sertificat_4.jpg",
    download_url: "",
    category: "Название категории",
    parent: 0,
    alias: "sert4",
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 7,
    image: "sertificat_3.jpg",
    download_url: "",
    category: "Название категории",
    parent: 0,
    alias: "sert3",
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 8,
    image: "sertificat_4.jpg",
    download_url: "",
    category: "Название категории",
    parent: 0,
    alias: "sert4",
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 9,
    image: "sertificat_5.jpg",
    download_url: "",
    category: "Название категории",
    parent: 1,
    alias: "sert5",
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 10,
    image: "sertificat_6.jpg",
    download_url: "",
    category: "Название категории",
    parent: 1,
    alias: "sert6",
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 11,
    image: "sertificat_1.jpg",
    download_url: "",
    category: "Название категории",
    parent: 1,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 12,
    image: "sertificat_2.jpg",
    download_url: "",
    category: "Название категории",
    parent: 1,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 13,
    image: "sertificat_1.jpg",
    download_url: "",
    category: "Название категории",
    parent: 1,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 14,
    image: "sertificat_3.jpg",
    download_url: "",
    category: "Название категории",
    parent: 1,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 15,
    image: "sertificat_5.jpg",
    download_url: "",
    category: "Название категории",
    parent: 2,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 16,
    image: "sertificat_2.jpg",
    download_url: "",
    category: "Название категории",
    parent: 2,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 17,
    image: "sertificat_4.jpg",
    download_url: "",
    category: "Название категории",
    parent: 2,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 18,
    image: "sertificat_1.jpg",
    download_url: "",
    category: "Название категории",
    parent: 2,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 19,
    image: "sertificat_3.jpg",
    download_url: "",
    category: "Название категории",
    parent: 2,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 20,
    image: "sertificat_4.jpg",
    download_url: "",
    category: "Название категории",
    parent: 2,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 21,
    image: "sertificat_1.jpg",
    download_url: "",
    category: "Название категории",
    parent: 2,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 22,
    image: "sertificat_3.jpg",
    download_url: "",
    category: "Название категории",
    parent: 2,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 23,
    image: "sertificat_1.jpg",
    download_url: "",
    category: "Название категории",
    parent: 3,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 24,
    image: "sertificat_2.jpg",
    download_url: "",
    category: "Название категории",
    parent: 3,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 25,
    image: "sertificat_5.jpg",
    download_url: "",
    category: "Название категории",
    parent: 3,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 26,
    image: "sertificat_3.jpg",
    download_url: "",
    category: "Название категории",
    parent: 3,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 27,
    image: "sertificat_2.jpg",
    download_url: "",
    category: "Название категории",
    parent: 3,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 28,
    image: "sertificat_5.jpg",
    download_url: "",
    category: "Название категории",
    parent: 3,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 29,
    image: "sertificat_3.jpg",
    download_url: "",
    category: "Название категории",
    parent: 3,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 30,
    image: "sertificat_2.jpg",
    download_url: "",
    category: "Название категории",
    parent: 4,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 31,
    image: "sertificat_1.jpg",
    download_url: "",
    category: "Название категории",
    parent: 4,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 32,
    image: "sertificat_4.jpg",
    download_url: "",
    category: "Название категории",
    parent: 4,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 33,
    image: "sertificat_3.jpg",
    download_url: "",
    category: "Название категории",
    parent: 4,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 34,
    image: "sertificat_4.jpg",
    download_url: "",
    category: "Название категории",
    parent: 4,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 35,
    image: "sertificat_3.jpg",
    download_url: "",
    category: "Название категории",
    parent: 4,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
  {
    id: 36,
    image: "sertificat_2.jpg",
    download_url: "",
    category: "Название категории",
    parent: 4,
    title: "Название сертификата",
    desc: " Vero ducimus id vitae ad dolor aliquam, tenetur cumque ab atque cum consequatur eaque sed soluta nihil inventore eveniet!",
  },
];

const questionsData: IQuestions[] = [
  {
    id: 1,
    title: "Часто задаваемый вопрос",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    id: 2,
    title: "Часто задаваемый вопрос",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    id: 3,
    title: "Часто задаваемый вопрос",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    id: 4,
    title: "Часто задаваемый вопрос",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    id: 5,
    title: "Часто задаваемый вопрос",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    id: 6,
    title: "Часто задаваемый вопрос",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    id: 7,
    title: "Что такое ОСА ЭВА?",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    id: 8,
    title: "Как часто нужно кушать?",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    id: 9,
    title: "Часто задаваемый вопрос",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    id: 10,
    title: "Часто задаваемый вопрос",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
];

export {
  bimData,
  catalogData,
  sertificatesData as certificatesData,
  questionsData,
};
