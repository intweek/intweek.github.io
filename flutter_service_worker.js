'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "fab7ed3fdac149f21936cab8f811d23f",
"assets/AssetManifest.bin": "502d92f1f9b01ed0c99df77bff24c1a4",
"assets/AssetManifest.bin.json": "d3208f52a0159201a8d01d1cb49dec88",
"assets/AssetManifest.json": "466a25994c5b5dc5f0c0c203c604b600",
"assets/assets/fonts/IconFonts/OtherIcons.ttf": "e516125c2d8b304235f967178952daee",
"assets/assets/fonts/IconFonts/PhysicsBranches.ttf": "3446807d65fe3052cfa9d92dddf49e1a",
"assets/assets/fonts/IconFonts/Screens.ttf": "525ecd41de4a97cdec5b2f62849f7d3f",
"assets/assets/fonts/IconFonts/SocialMedia.ttf": "7e45c86cc00abb11abbab5fb309cbd91",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat/Montserrat-BoldItalic.ttf": "9d216a715551da3b92a4a9b0e8994868",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "761177c558bb3a0084aa85704315b990",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/NotoSans/NotoSans-Bold.ttf": "b20e2d260790596b6f6624a42b9c7833",
"assets/assets/fonts/NotoSans/NotoSans-BoldItalic.ttf": "6a1b004f6b834a3a3099373655ede470",
"assets/assets/fonts/NotoSans/NotoSans-Italic.ttf": "d50ffd77a2f06bfbc2a3920791f514e3",
"assets/assets/fonts/NotoSans/NotoSans-Medium.ttf": "42b6fa652971de0a49b3df511da65245",
"assets/assets/fonts/NotoSans/NotoSans-MediumItalic.ttf": "2e4cd15e722fee636b948530e5d34e74",
"assets/assets/fonts/NotoSans/NotoSans-Regular.ttf": "2a1861cd1ca7030ae9bb29f3192bb1e3",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/SourceSans3/SourceSans3-Bold.ttf": "91e42896d12340dc2039cf7098cf6682",
"assets/assets/fonts/SourceSans3/SourceSans3-BoldItalic.ttf": "aa831acd02e131dbff3f9788edcb3606",
"assets/assets/fonts/SourceSans3/SourceSans3-Italic.ttf": "f3045d777d56404bc6cebb77199e360f",
"assets/assets/fonts/SourceSans3/SourceSans3-Medium.ttf": "0029d6c389a7945dbc32604af073250d",
"assets/assets/fonts/SourceSans3/SourceSans3-MediumItalic.ttf": "2cb68f35243826511855199d75deb4bd",
"assets/assets/fonts/SourceSans3/SourceSans3-Regular.ttf": "72a368e7e2bcbd83f75c763aa19d8bf4",
"assets/assets/fonts/SourceSans3/SourceSans3-SemiBold.ttf": "f8c4ac5aa4a74e615a13bf3c902506af",
"assets/assets/fonts/SourceSans3/SourceSans3-SemiBoldItalic.ttf": "67e7bab044443660d51748363f0bc489",
"assets/assets/images/404_screen/404_dark.webp": "f82aa32713d3e08afd026863ac27a4c7",
"assets/assets/images/404_screen/404_light.webp": "a0c4121c8549987b672054e068c75276",
"assets/assets/images/formulas_background.webp": "5fee4cca8372428cf3195b64e82e42c4",
"assets/assets/images/lessons/1_formuliu_isreiskimas_trikampio_budu/Emgh_trikampis.webp": "109cd18b25340ee9186afec18924f43a",
"assets/assets/images/lessons/1_formuliu_isreiskimas_trikampio_budu/gEmh_trikampis_su_uzdengimu.webp": "c8ea87b8eb8b643cf38de313379db25e",
"assets/assets/images/lessons/1_formuliu_isreiskimas_trikampio_budu/svt_trikampis_su_uzdengimu.webp": "b9575079046a58abf1c7bbb1ed18b59e",
"assets/assets/images/lessons/1_formuliu_isreiskimas_trikampio_budu/virselis.webp": "6340ffa30c3d12057f916d6b5df65535",
"assets/assets/images/lessons/1_formuliu_isreiskimas_trikampio_budu/virsus_apacia.webp": "c68868304a3b6ad2f70636498c551178",
"assets/assets/images/lessons/1_formuliu_isreiskimas_trikampio_budu/vst_trikampis.webp": "23d3ff32d99b3da60991f347773b0c1c",
"assets/assets/images/lessons/2_formuliu_isreiskimas_algebriniu_budu/virselis.webp": "060a6f5193dc1d5d77b42e9b9cfbfdcd",
"assets/assets/images/lessons/3_vienetu_isreiskimas_su_si_priesdeliais/iSI_schema.webp": "d6ee1ce6f4ac1f63ce68025eb907b7d2",
"assets/assets/images/lessons/3_vienetu_isreiskimas_su_si_priesdeliais/isSIiSI_schema.webp": "7535a919ee045b3b176d6ee04b1dfd77",
"assets/assets/images/lessons/3_vienetu_isreiskimas_su_si_priesdeliais/isSI_schema.webp": "f4207a5c3aec2d4afd15a02a409556f8",
"assets/assets/images/lessons/3_vienetu_isreiskimas_su_si_priesdeliais/virselis.webp": "e92faadbd44e2260215b97b1e2367fdb",
"assets/assets/images/lessons/4_vienetu_isreiskimas_isvestiniai_vienetai/virselis.webp": "b66636eb624c276515d3d0f340f08285",
"assets/assets/images/lessons/5_uzdaviniu_sprendimas/virselis.webp": "31db48afd39d099ecc0c587b8028fafc",
"assets/assets/images/lessons/virseliai/1_formuliu_isreiskimas_trikampio_budu.webp": "6f839b814b21875571f6f870154801f1",
"assets/assets/images/lessons/virseliai/2_formuliu_isreiskimas_algebriniu_budu.webp": "e13d03e815fd14e0fa4b59c0d5c05e2e",
"assets/assets/images/lessons/virseliai/3_vienetu_isreiskimas_su_si_priesdeliais.webp": "3f67f202bffcb587c3bebff9cb0d3593",
"assets/assets/images/lessons/virseliai/4_vienetu_isreiskimas_isvestiniai_vienetai.webp": "05af7e39d27ec88e434ff6cadb8acb04",
"assets/assets/images/lessons/virseliai/5_uzdaviniu_sprendimas.webp": "c07942658e5c26136f0d0199437b2dd0",
"assets/assets/images/margins/greek_handwritten_letters/alpha01.webp": "79626f27a8b81e3ef7ec8ef5e365de70",
"assets/assets/images/margins/greek_handwritten_letters/beta02.webp": "a69749aad31333f6534b9d55159081e5",
"assets/assets/images/margins/greek_handwritten_letters/chi22.webp": "e7970f09c4b528301b834d2fa9e797e3",
"assets/assets/images/margins/greek_handwritten_letters/delta04.webp": "54cebcc7123f4b89b49f1c176e81b651",
"assets/assets/images/margins/greek_handwritten_letters/epsilon05.webp": "ec2d073d94fbdf4d08450cc011c7f01f",
"assets/assets/images/margins/greek_handwritten_letters/eta07.webp": "fab1a0e274e65b7b0b6b32cf7dffb2d8",
"assets/assets/images/margins/greek_handwritten_letters/gamma03.webp": "2330318ace36305e4fc034358c51b221",
"assets/assets/images/margins/greek_handwritten_letters/iota09.webp": "7af3b129fca11756e2873b7059a0e30d",
"assets/assets/images/margins/greek_handwritten_letters/kappa10.webp": "ce7ba16f759d10636b95a0958368ed13",
"assets/assets/images/margins/greek_handwritten_letters/lambda11.webp": "b5482e728c3e0c080cfb74681f3a7708",
"assets/assets/images/margins/greek_handwritten_letters/mu12.webp": "6a8421ebf0fddf49305c6596a47490e2",
"assets/assets/images/margins/greek_handwritten_letters/nu13.webp": "f664f68e59edbf18a456796176a18db1",
"assets/assets/images/margins/greek_handwritten_letters/omega24.webp": "4ff9b9e1cb5b7b9379a19ee1c0c8f853",
"assets/assets/images/margins/greek_handwritten_letters/omicron15.webp": "de90df403251f9978339ace6d90dab44",
"assets/assets/images/margins/greek_handwritten_letters/phi21.webp": "8024c64adfb1955491028fb422526f6d",
"assets/assets/images/margins/greek_handwritten_letters/pi16.webp": "e0ff04651c95a6024043e0a3b263d63e",
"assets/assets/images/margins/greek_handwritten_letters/psi23.webp": "9ce8ad61ab3bb82e789bcd3a60d2a640",
"assets/assets/images/margins/greek_handwritten_letters/rho17.webp": "ea09f6bf9ad94fe21fa042c219ba7bc1",
"assets/assets/images/margins/greek_handwritten_letters/sigma18.webp": "cf924fe1434a4ba55e4a3ca2c51522ee",
"assets/assets/images/margins/greek_handwritten_letters/tau19.webp": "a6a41024b70323d6234b119c40d0189f",
"assets/assets/images/margins/greek_handwritten_letters/theta08.webp": "4cdebd2f564a7d1148c3302c105cddd2",
"assets/assets/images/margins/greek_handwritten_letters/upsilon20.webp": "04f130688a9531504f5f36ca901c0447",
"assets/assets/images/margins/greek_handwritten_letters/xi14.webp": "70d778b152a2cba030a9bfcb1371d01a",
"assets/assets/images/margins/greek_handwritten_letters/zeta06.webp": "fd035b00d62b77781dfbac510d2381ea",
"assets/assets/images/notebook/app_bar_backgrounds/electricity.webp": "02449368fe0a15cae106ce68d164791c",
"assets/assets/images/notebook/app_bar_backgrounds/magnetism.webp": "563227b970b16d709ac31a9f48ccafc4",
"assets/assets/images/notebook/app_bar_backgrounds/mechanics.webp": "8fccb937d87b7cf875367128a4533aa2",
"assets/assets/images/notebook/app_bar_backgrounds/optics.webp": "757da4bb88530ec49fa37d4a7ce13a71",
"assets/assets/images/notebook/app_bar_backgrounds/thermodynamics.webp": "3973e8b9b129a20baada41a69e9d7404",
"assets/assets/images/notebook/app_bar_backgrounds/waves.webp": "1123ea58506efea8c3c26703d0136640",
"assets/assets/images/notebook/topic_images/1%2520-%2520mechaninis%2520judejimas%2520jo%2520rusys%2520ir%2520apskaiciavimas/kelio_grafikas.webp": "d979f3c77ef9c39bdd2062146fedf699",
"assets/assets/images/notebook/topic_images/10%2520-%2520potencine%2520bei%2520kinetine%2520energijos/energija_pvz(1).webp": "42a11d2b4d0dba6433407c1c1ac741ee",
"assets/assets/images/notebook/topic_images/10%2520-%2520potencine%2520bei%2520kinetine%2520energijos/energija_pvz(2).webp": "bd4390647940fcdffde1a5b96307eb56",
"assets/assets/images/notebook/topic_images/11%2520-%2520mechaniniai%2520svyravimai%2520bangos/11%2520-%2520mechanine%2520banga.webp": "28e5cc534304fe0b276fb4d58e2e3197",
"assets/assets/images/notebook/topic_images/11%2520-%2520mechaniniai%2520svyravimai%2520bangos/11%2520-%2520mechaninis%2520svyravimas.webp": "a97142ee45b96fd7bfdddf97424b20ce",
"assets/assets/images/notebook/topic_images/15%2520-%2520agregatines%2520busenos%2520ju%2520virsmai/agregatines_busenos(1).webp": "68d0d2dbbd5ad9e530eaf2fd056fb87a",
"assets/assets/images/notebook/topic_images/15%2520-%2520agregatines%2520busenos%2520ju%2520virsmai/agregatines_busenos(2).webp": "2be0c4ea5e1df533319bc32826a89b7b",
"assets/assets/images/notebook/topic_images/16%2520-%2520siluminiai%2520varikliai/garo_turbina.webp": "b240eec611999de89da869eec56d6bab",
"assets/assets/images/notebook/topic_images/16%2520-%2520siluminiai%2520varikliai/stumoklio_taktai.webp": "1e74090f0921f447a675bd812aa9ecaf",
"assets/assets/images/notebook/topic_images/16%2520-%2520siluminiai%2520varikliai/stumoklio_taktas(1).webp": "168b31080a1bc1566abdbcb27899d211",
"assets/assets/images/notebook/topic_images/16%2520-%2520siluminiai%2520varikliai/stumoklio_taktas(2).webp": "164e815521194d2b992971bf75d56fc3",
"assets/assets/images/notebook/topic_images/16%2520-%2520siluminiai%2520varikliai/stumoklio_taktas(3).webp": "cfcd9849d89cffdd86a374b8416d75a1",
"assets/assets/images/notebook/topic_images/16%2520-%2520siluminiai%2520varikliai/stumoklio_taktas(4).webp": "5cd7236975c70e0a8fe13e44f305c390",
"assets/assets/images/notebook/topic_images/16%2520-%2520siluminiai%2520varikliai/vidaus_degimo_variklis.webp": "6f2bc14b76b1342d51be66f7229f6647",
"assets/assets/images/notebook/topic_images/17%2520-%2520elektros%2520srove/elektrinio_lauko_linijos(1).webp": "e678e3d04b4585bc6c928a3be1e20857",
"assets/assets/images/notebook/topic_images/17%2520-%2520elektros%2520srove/elektrinio_lauko_linijos(2).webp": "e6bb3af2b336a3da859f61eb1879e3d9",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/ampermetrai.webp": "c44488e46e291799d897ad902aa4c503",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/ampermetro_schema.webp": "871df6533a2ee9bd63d19b8931cf7ad9",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/ampermetras.webp": "62f605522f95a276ad44616c7118276c",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/elektrinis_skambutis.webp": "b0b674c68ada96a8d0a143a8b8e2cff8",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/elementas_baterija.webp": "3b89c29b44f6e9a57d9c41fe4d23d96f",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/gnybtai.webp": "d0e10b5ec28f1ad9c27c66a6d42cbc33",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/jungiklis.webp": "4d0d23c4e90a77757ae2dc159b791003",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/kaitinamoji_lempa.webp": "6b470b297b99b3b8de17a91048e74706",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/saugiklis.webp": "e76e683c4ba69d6007b968593904da82",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/sliauziklinis_reostatas.webp": "dac6008002fa19abc30cd7451bfd236e",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/sujungti_laidai.webp": "e0845945998b6539cd3db2b5f4b58e1f",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/susikertantys_laidai.webp": "3c3cae7b2b4d4f5265fa4b9a1a2613be",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/varzas_rezistorius.webp": "596b372ee6cf099501d29833b7670d3c",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/elektrines%2520schemos%2520dalys/voltmetras.webp": "6ffc7a9e7cd6d8d6f4b80c91982d8001",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/voltemtrai.webp": "68e24b67b3380f1c565cd96a5905f48b",
"assets/assets/images/notebook/topic_images/18%2520-%2520elektros%2520sroves%2520stipris%2520itampa%2520bei%2520varza/voltmetro_schema.webp": "606104e908bed5edc7eedad08e63998d",
"assets/assets/images/notebook/topic_images/19%2520-%2520elektrines%2520grandines%2520schemos/lygiagretusis_jungimas(1).webp": "c152ac1f4b275a8a557c844dd47c4e69",
"assets/assets/images/notebook/topic_images/19%2520-%2520elektrines%2520grandines%2520schemos/lygiagretusis_jungimas(2).webp": "9771be09a2e04d1924e32830d37c81e1",
"assets/assets/images/notebook/topic_images/19%2520-%2520elektrines%2520grandines%2520schemos/lygiagretusis_jungimas(3).webp": "0ed0857578ce3dd5ac4a2fc5620eaf05",
"assets/assets/images/notebook/topic_images/19%2520-%2520elektrines%2520grandines%2520schemos/misrusis_jungimas(1).webp": "b227231dbb0dcaa8bad2349d0023b432",
"assets/assets/images/notebook/topic_images/19%2520-%2520elektrines%2520grandines%2520schemos/misrusis_jungimas(2).webp": "9a04f4e8921d1ba911f09b8d9fd8b288",
"assets/assets/images/notebook/topic_images/19%2520-%2520elektrines%2520grandines%2520schemos/misrusis_jungimas(3).webp": "7edea712ddd20ce7ba29ea4c22fa07d2",
"assets/assets/images/notebook/topic_images/19%2520-%2520elektrines%2520grandines%2520schemos/misrusis_jungimas(4).webp": "30baffeaebcf6acf9d68a34fa64e8799",
"assets/assets/images/notebook/topic_images/19%2520-%2520elektrines%2520grandines%2520schemos/nuoseklusis_jungimas(1).webp": "15a559cc78329688301ef11079016ef3",
"assets/assets/images/notebook/topic_images/19%2520-%2520elektrines%2520grandines%2520schemos/nuoseklusis_jungimas(2).webp": "5542ccc7231282773c886b36a639ca1a",
"assets/assets/images/notebook/topic_images/19%2520-%2520elektrines%2520grandines%2520schemos/nuoseklusis_jungimas(3).webp": "67472a0ff599a0802c4932ea0cc52226",
"assets/assets/images/notebook/topic_images/2%2520-%2520mases%2520centras%2520tamprumo%2520jega%2520trintis/mases_centro_nustatymas(1).webp": "f6ca390c6aed5efbd4604116407a53f7",
"assets/assets/images/notebook/topic_images/2%2520-%2520mases%2520centras%2520tamprumo%2520jega%2520trintis/mases_centro_nustatymas(2).webp": "c46103d5780fd0dbc8eca9893b9b1456",
"assets/assets/images/notebook/topic_images/2%2520-%2520mases%2520centras%2520tamprumo%2520jega%2520trintis/pusiausvyros_rusys_liniuotes(1).webp": "fb37dd576c40acbce12c0578bd030a28",
"assets/assets/images/notebook/topic_images/2%2520-%2520mases%2520centras%2520tamprumo%2520jega%2520trintis/pusiausvyros_rusys_liniuotes(2).webp": "66c17855bf7b9431e176ae043fa5bb81",
"assets/assets/images/notebook/topic_images/2%2520-%2520mases%2520centras%2520tamprumo%2520jega%2520trintis/pusiausvyros_rusys_liniuotes(3).webp": "ff243dd4bd0e50d97b3abefb89f489db",
"assets/assets/images/notebook/topic_images/2%2520-%2520mases%2520centras%2520tamprumo%2520jega%2520trintis/pusiausvyros_rusys_liniuotes.webp": "a664d0bd07fed7eabd311ab9854957dd",
"assets/assets/images/notebook/topic_images/21%2520-%2520elektriniai%2520prietaisai%2520elektros%2520poveikis/automatinis_saugiklis.webp": "d7163199af57879eee1b74c105aff568",
"assets/assets/images/notebook/topic_images/21%2520-%2520elektriniai%2520prietaisai%2520elektros%2520poveikis/elektros_lempute.webp": "b43c513d5dd6720b6d0e9b91a9488637",
"assets/assets/images/notebook/topic_images/21%2520-%2520elektriniai%2520prietaisai%2520elektros%2520poveikis/lituoklis.webp": "64ed9818acb5a943372b30b1165e6277",
"assets/assets/images/notebook/topic_images/21%2520-%2520elektriniai%2520prietaisai%2520elektros%2520poveikis/lydusis_saugiklis.webp": "68864c117baaee20c31da3b7e9d55d9c",
"assets/assets/images/notebook/topic_images/21%2520-%2520elektriniai%2520prietaisai%2520elektros%2520poveikis/lygintuvas.webp": "cd7ba5d5ff474db92ef7b9297a5c35a0",
"assets/assets/images/notebook/topic_images/22%2520-%2520elektros%2520srove%2520skysciuose%2520dujose%2520ir%2520vakuume/diodas.webp": "0cc263b34621a03b2168c785ce29c927",
"assets/assets/images/notebook/topic_images/22%2520-%2520elektros%2520srove%2520skysciuose%2520dujose%2520ir%2520vakuume/diodo_voltamperine_charalteristika.webp": "e0693cc454933db07bdacc17fb7616b6",
"assets/assets/images/notebook/topic_images/22%2520-%2520elektros%2520srove%2520skysciuose%2520dujose%2520ir%2520vakuume/elektrolize.webp": "32e4058c6d107657e9fe9e0119e192df",
"assets/assets/images/notebook/topic_images/22%2520-%2520elektros%2520srove%2520skysciuose%2520dujose%2520ir%2520vakuume/triodas.webp": "a6c652730359e509272d8b39c6507f84",
"assets/assets/images/notebook/topic_images/23%2520-%2520elektros%2520srove%2520puslaidininkiuose/metalu_puslaidininikiu_varza.webp": "6b850b9bbdb5533ee43a896ee0a3d922",
"assets/assets/images/notebook/topic_images/23%2520-%2520elektros%2520srove%2520puslaidininkiuose/pn_kryptis(1).webp": "367b3c9a29f493e35f6be751b1f1a380",
"assets/assets/images/notebook/topic_images/23%2520-%2520elektros%2520srove%2520puslaidininkiuose/pn_kryptis(2).webp": "91dd8869d3623d97cf134b14f30bad50",
"assets/assets/images/notebook/topic_images/23%2520-%2520elektros%2520srove%2520puslaidininkiuose/puslaidininkis_silicis(1).webp": "8bf46c92eccdebff63b849b535879edb",
"assets/assets/images/notebook/topic_images/23%2520-%2520elektros%2520srove%2520puslaidininkiuose/puslaidininkis_silicis(2).webp": "722cb472954ebd713c59e79f2a543b92",
"assets/assets/images/notebook/topic_images/23%2520-%2520elektros%2520srove%2520puslaidininkiuose/puslaidininkiu_coltamperine_charakteristika.webp": "532bba59d26a6347c660ff0a00e4be8f",
"assets/assets/images/notebook/topic_images/24%2520-%2520magnetinis%2520laukas%2520magnetai/desiniosios_rankos_taisykle.webp": "719b6aa0137375d12ab207bfde2ec59e",
"assets/assets/images/notebook/topic_images/24%2520-%2520magnetinis%2520laukas%2520magnetai/elektromagnetas_rite.webp": "d935eba505e0e6d4dcc9d09c79ca2f46",
"assets/assets/images/notebook/topic_images/24%2520-%2520magnetinis%2520laukas%2520magnetai/magnetas_pasaginis.webp": "cb36dfd4e84d48d7c353ac6f94fac8e3",
"assets/assets/images/notebook/topic_images/24%2520-%2520magnetinis%2520laukas%2520magnetai/magnetas_strypinis.webp": "9b4e82a233337a047301ac295efc210d",
"assets/assets/images/notebook/topic_images/24%2520-%2520magnetinis%2520laukas%2520magnetai/magnetas_ziedinis.webp": "48fa352ee0318d3a7cb5edc2ba9a58e7",
"assets/assets/images/notebook/topic_images/24%2520-%2520magnetinis%2520laukas%2520magnetai/telefonas(1).webp": "e37d8a9a8cf5fc163776636d18f32fbb",
"assets/assets/images/notebook/topic_images/24%2520-%2520magnetinis%2520laukas%2520magnetai/telefonas(2).webp": "12bf0af79ad72693d3c195886ef41df1",
"assets/assets/images/notebook/topic_images/24%2520-%2520magnetinis%2520laukas%2520magnetai/zemes_magnetinis_laukas.webp": "323fc14b4efc5ac3eb597b4e2e3a1bce",
"assets/assets/images/notebook/topic_images/3%2520-%2520gravitacine%2520trauka%2520sunkis%2520svoris/sunkio_jega.webp": "62c4f162dfd91e7df6b36624b4e65b37",
"assets/assets/images/notebook/topic_images/3%2520-%2520gravitacine%2520trauka%2520sunkis%2520svoris/sunkio_jegos_svorio_palyginimas.webp": "96486fc59873623301e8a9ae4fdb14b5",
"assets/assets/images/notebook/topic_images/3%2520-%2520gravitacine%2520trauka%2520sunkis%2520svoris/svoris.webp": "f3332b633fdada92cc2f30ec703b5de9",
"assets/assets/images/notebook/topic_images/4%2520-%2520jega%2520jos%2520momentas%2520jegu%2520atstojamoji/jegos_momentas.webp": "6174a736c57f2bdfc00b64e3bb9f68a7",
"assets/assets/images/notebook/topic_images/4%2520-%2520jega%2520jos%2520momentas%2520jegu%2520atstojamoji/jegu_momentu_taisykle.webp": "2e371407a4adfa200691392d2a70e7d4",
"assets/assets/images/notebook/topic_images/4%2520-%2520jega%2520jos%2520momentas%2520jegu%2520atstojamoji/sudedamosios_jegos_lygiagreciai.webp": "c2d538cdd03b3bdf2f86081fc967400a",
"assets/assets/images/notebook/topic_images/4%2520-%2520jega%2520jos%2520momentas%2520jegu%2520atstojamoji/sudedamosios_jegos_priesingos_kryptys.webp": "cf4dad83082e6bf468b3fc5f8c7f00af",
"assets/assets/images/notebook/topic_images/4%2520-%2520jega%2520jos%2520momentas%2520jegu%2520atstojamoji/sudedamosios_jegos_ta_pati_kryptis.webp": "ac9d88e8c75149a8e6882ff7fc715323",
"assets/assets/images/notebook/topic_images/5%2520-%2520slegis%2520kietuosiuose%2520kunuose%2520skysciuose%2520ir%2520dujose/deformacinis_manometras(1).webp": "4179de951a97138d07d4df8960a0f6e7",
"assets/assets/images/notebook/topic_images/5%2520-%2520slegis%2520kietuosiuose%2520kunuose%2520skysciuose%2520ir%2520dujose/deformacinis_manometras(2).webp": "1345f207d2b164bce7758278efb1a127",
"assets/assets/images/notebook/topic_images/5%2520-%2520slegis%2520kietuosiuose%2520kunuose%2520skysciuose%2520ir%2520dujose/skyscio_manometras(1).webp": "cdf3a9fd4b46e81de907b2da3d75dc26",
"assets/assets/images/notebook/topic_images/5%2520-%2520slegis%2520kietuosiuose%2520kunuose%2520skysciuose%2520ir%2520dujose/skyscio_manometras(2).webp": "87e590365aad656eac69525ee2dda648",
"assets/assets/images/notebook/topic_images/6%2520-%2520atmosferos%2520slegis/aneroidas(1).webp": "4b7f0bac601d0cca7e11a1bff82de632",
"assets/assets/images/notebook/topic_images/6%2520-%2520atmosferos%2520slegis/aneroidas(2).webp": "15de5c8f4e99cb314d38bec47f6407a2",
"assets/assets/images/notebook/topic_images/6%2520-%2520atmosferos%2520slegis/toricelio_bandymas.webp": "f9670db6331625f62d8d9d8fde8b06e5",
"assets/assets/images/notebook/topic_images/7%2520-%2520susisiekiamieji%2520indai%2520archimedo%2520jega/archimedo_jega.webp": "93ed47a3cd8579f93fa2063c5657c872",
"assets/assets/images/notebook/topic_images/7%2520-%2520susisiekiamieji%2520indai%2520archimedo%2520jega/susisiekiamieji_indai_nevienalytis_skystis.webp": "2678632e5737dae4fb1c8f0af0a21ca1",
"assets/assets/images/notebook/topic_images/7%2520-%2520susisiekiamieji%2520indai%2520archimedo%2520jega/susisiekiamieji_indai_praktika.webp": "15e391e0dbd4b1eb758e16143c26ef19",
"assets/assets/images/notebook/topic_images/7%2520-%2520susisiekiamieji%2520indai%2520archimedo%2520jega/susisiekiamieji_indai_vienalytis_skystis.webp": "9541e969a4f16e57911e50c78a193c64",
"assets/assets/images/notebook/topic_images/8%2520-%2520paprastieji%2520mechanizmai/kilnojamasis_skridinys.webp": "eacbd49303bb9dd55d6c67d54e091218",
"assets/assets/images/notebook/topic_images/8%2520-%2520paprastieji%2520mechanizmai/nekilnojamasis_skridinys.webp": "2e25960476db1ccef65def2f266bde12",
"assets/assets/images/notebook/topic_images/8%2520-%2520paprastieji%2520mechanizmai/nuozulnioji_plokstuma.webp": "a4554a9942da86d6a10fa39cb13ed24b",
"assets/assets/images/notebook/topic_images/8%2520-%2520paprastieji%2520mechanizmai/skrystis.webp": "50fd7fe2702e3d8776ceeba5af3f38ae",
"assets/assets/images/notebook/topic_images/8%2520-%2520paprastieji%2520mechanizmai/svertas(1).webp": "40eeec446871337b9beaaf6eb50862b4",
"assets/assets/images/notebook/topic_images/8%2520-%2520paprastieji%2520mechanizmai/svertas(2).webp": "40eb48887dd9d7f8f493f45fcce130ec",
"assets/assets/images/notebook/topic_images/8%2520-%2520paprastieji%2520mechanizmai/svertas(3).webp": "f71464a7b67b21cec585af2af7b5d9e7",
"assets/assets/images/notebook/topic_images/8%2520-%2520paprastieji%2520mechanizmai/svertas(4).webp": "8ee0fd3b47139dbafc45fc41fc368208",
"assets/assets/svg/fizzika_icon/fizzika.svg": "607ed285d5e2ed0051d0a33bb5d8edd0",
"assets/assets/svg/fizzika_icon/fizzika_outline.svg": "85c19e85d5198b734f2c738e1098cd17",
"assets/assets/svg/fizzika_icon/fizzika_outline_transparent.svg": "b6cc1c54da6a736c3674703c1f69fe88",
"assets/assets/svg/fizzika_icon/fizzika_text_only.svg": "fae2f98012a1e6283958250ae4086e2c",
"assets/assets/svg/fizzika_icon/fizzika_transparent.svg": "ba6dc54f4c24ab3f2e519398e334b2d5",
"assets/FontManifest.json": "2f5d19bfc09c37668a02a012f5875b71",
"assets/fonts/MaterialIcons-Regular.otf": "998ae5bf15a2e55bf974c3859935d3cf",
"assets/NOTICES": "9443eaefa2b300c7f0eec1244cce0427",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b571b1810b9816c4af8a7235a66568e7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "07ecab284213c80560498c51c81268d4",
"icons/Icon-192.png": "32dcdaebe41b2f463182661ff7b8e225",
"icons/Icon-512.png": "04ff0462ce5a72c1884f9e081c70f941",
"icons/Icon-maskable-192.png": "32dcdaebe41b2f463182661ff7b8e225",
"icons/Icon-maskable-512.png": "04ff0462ce5a72c1884f9e081c70f941",
"index.html": "6f318030c71fd8f5521d6992752c8200",
"/": "6f318030c71fd8f5521d6992752c8200",
"main.dart.js": "39609761914f15250df9e3879faf384b",
"manifest.json": "19fbd32dd5fa4342e554e30bb72bce08",
"og/main_page_og_image.png": "f73cc5fcf29c0d290e27608256680893",
"splash/img/dark-1x.png": "8d7ac96e8b9f704dfd13094ae56b2e3d",
"splash/img/dark-2x.png": "99645322de3a468f559b2015a665de34",
"splash/img/dark-3x.png": "966b0d73c2ef203e7205862904fa14ae",
"splash/img/dark-4x.png": "bba54f10963ea72b6a36d43ded44f447",
"splash/img/light-1x.png": "8d7ac96e8b9f704dfd13094ae56b2e3d",
"splash/img/light-2x.png": "99645322de3a468f559b2015a665de34",
"splash/img/light-3x.png": "966b0d73c2ef203e7205862904fa14ae",
"splash/img/light-4x.png": "bba54f10963ea72b6a36d43ded44f447",
"version.json": "49e390bd6efd4a1d95985567106e10b4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
