const parentContainer = document.getElementById("allrecords");
const skinDiscriptionHeader = parentContainer.querySelector('[field="tn_text_1674051895849"]');
const skinDiscription = parentContainer.querySelector('[field="tn_text_1674051669659"]');
const skinTypeInRound = parentContainer.querySelector('[field="tn_text_1674051811588"]');
const infoDashesInRound = parentContainer.querySelector('[field="tn_text_1674051734898"]');
const productsContainer = parentContainer.querySelector('[data-display-changed="true"]'); 
let clientResults; //массив массивов
const preparedCarts = {
   normal: {
        skinTypeInRound: 'Нормальная',
        infoDashesInRound: ['Рельеф кожи лица гладкий, поры мало заметны',
                            'Не беспокоят покраснения и раздражения',
                            'Стянутость или шелушение после умывания не наблюдаются',
                            'Тон равномерный, на щеках здоровый румянец',
                            'Жирный блеск появляется редко и не выходит за границы Т-зоны'
                            ],
        skinDiscriptionHeader: 'нормальная',
        skinDescription: 'Ваша кожа хорошо сбалансирована. Такая кожа не имеет очевидных блестящих или сухих участков, для неё характерно умеренное выделение кожного сала. Кожа такого типа считается неприхотливой, но она так же периодически страдает от обезвоживания, ультрафиолета, недостаточного или слишком агрессивного очищения. Ей так же необходимы регулярная поддержка и бережный уход.',
        small_makeup:[
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=422346175211", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761", 
        ],
        links_small_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-422346175211-secret-of-beauty-lithophytomask-3-akva-t",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be"
        ],
        small: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=422346175211", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",
        ],
        links_small: [
          "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-422346175211-secret-of-beauty-lithophytomask-3-akva-t",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be"
        ],
        middle_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=123312724541&productuid=979644446961",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",    
        ],
        links_middle_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-979644446961-neofam-fammask-3-nasischenie-vlagoi-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be"
        ],
        middle: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",    
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=123312724541&productuid=979644446961",      
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",    
        ],
        links_middle: [
          "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-979644446961-neofam-fammask-3-nasischenie-vlagoi-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be"
        ],
        big_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=795245231961", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=359028644021", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=191001658991",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991",   
        ],
        links_big_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-795245231961-mix-mineral-gel-blackampwhite-dvoinoi-ef",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-359028644021-gel-gommazh-gidratatsiya-i-super-light-5",
          "https://skecobeauty.com/lico/tproduct/495947610-191001658991-krem-flyor-akva-amp-shine-skin-dlya-ezhe",
          "https://skecobeauty.com/lico/tproduct/495947610-342175923991-pitatelnii-krem-secret-of-beauty-50-ml"
        ],
        big: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=795245231961", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=359028644021", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=191001658991",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991",   
        ],
        links_big: [
          "https://skecobeauty.com/lico/tproduct/495947610-795245231961-mix-mineral-gel-blackampwhite-dvoinoi-ef",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-359028644021-gel-gommazh-gidratatsiya-i-super-light-5",
          "https://skecobeauty.com/lico/tproduct/495947610-191001658991-krem-flyor-akva-amp-shine-skin-dlya-ezhe",
          "https://skecobeauty.com/lico/tproduct/495947610-342175923991-pitatelnii-krem-secret-of-beauty-50-ml"
        ],
        antiage_small_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=128746543901",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=891171676011",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=988426740971",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=136241465261",
          ],
          links_antiage_small_makeup: [
            "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
            "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
            "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
            "https://skecobeauty.com/lico/tproduct/495947610-128746543901-secret-of-beauty-lithophytomask-1-anti-e",
            "https://skecobeauty.com/lico/tproduct/495947610-891171676011-secret-of-beauty-lithophytomask-2-liftin",
            "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
            "https://skecobeauty.com/lico/tproduct/495947610-988426740971-idealnii-kontur-podtyazhka-krem-secret-o",
            "https://skecobeauty.com/lico/tproduct/495947610-136241465261-regeneratsiya-krem-secret-of-beauty-50-m"
          ],
        antiage_small: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=128746543901",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=891171676011",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=988426740971",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=136241465261",
        ],
        links_antiage_small: [
          "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-128746543901-secret-of-beauty-lithophytomask-1-anti-e",
          "https://skecobeauty.com/lico/tproduct/495947610-891171676011-secret-of-beauty-lithophytomask-2-liftin",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-988426740971-idealnii-kontur-podtyazhka-krem-secret-o",
          "https://skecobeauty.com/lico/tproduct/495947610-136241465261-regeneratsiya-krem-secret-of-beauty-50-m"
        ],
        antiage_middle_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=228393642461&productuid=571756562061",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=228393642461&productuid=592051998581",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=621909121331",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=136241465261"
        ],
        links_antiage_middle_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-571756562061-neofam-fammask-2-lift-aktiv-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-592051998581-neofam-fammask-5-podtyazhka-kozhi-vokrug",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-621909121331-revitalifting-krem-secret-of-beauty-50-m",
          "https://skecobeauty.com/lico/tproduct/495947610-136241465261-regeneratsiya-krem-secret-of-beauty-50-m"
        ],
        antiage_middle: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=959346832181",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=443122908781",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=891171676011",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=338793218191&productuid=775327399761",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=839804032431",
        ],
        links_antiage_middle: [
          "https://skecobeauty.com/lico/tproduct/495947610-178219212531-neofam-fammask-6-rovnii-ton-50-g",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-443122908781-secret-of-beauty-lithophytomask-6-suzhen",
          "https://skecobeauty.com/lico/tproduct/495947610-891171676011-secret-of-beauty-lithophytomask-2-liftin",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be",
          "https://skecobeauty.com/lico/tproduct/495947610-839804032431-intensivnoe-pitanie-krem-secret-of-beaut"
        ],
        antiage_big: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=476253741491&productuid=246793326681",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",  
        ],
        links_antiage_big: [
          "https://skecobeauty.com/lico/tproduct/495947610-246793326681-ln-science-lab-anti-age-max-effekt",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti"
        ],
        antiage_big_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=476253741491&productuid=246793326681",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",  
        ],
        links_antiage_big_makeup: [
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-246793326681-ln-science-lab-anti-age-max-effekt",
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec"
        ]
},
    combined: {
        skinTypeInRound: 'Комбинированная',
        infoDashesInRound: ['T-зона выглядит блестящей и склонна к образованию высыпаний, комедонов, угрей',
                            'Расширенные поры в Т-зоне',
                            'Кожа на щеках нормальная или даже сухая',
                            'Сухие участки склонны к шелушению и образованию морщинок',
                            'Тусклая кожа без здорового сияния'
                            ],
        skinDiscriptionHeader: 'комбинированная',
        skinDescription: 'Этому типу кожи присущи все типы, которые сменяют друг друга на разных участках: Т-зона (подбородок, нос, лоб) отличается интенсивным выделением кожного сала, в U-зоне (область щек, скул) кожа наоборот – сухая. Для ухода за данным типом кожи следует выбирать средства, разработанные специально для комбинированной кожи и восстанавливающие ее естественный водный баланс.',
        small: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=931339795231",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=929996884901",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=859856427821",
        ],
        links_small: [
          "https://skecobeauty.com/lico/tproduct/495947610-931339795231-secret-of-beauty-lithocomplex-2-aktiv-dl",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-929996884901-neofam-fammask-8-talasso-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-859856427821-multizaschita-krem-secret-of-beauty-50-m"
        ],
        small_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=931339795231",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=929996884901",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=859856427821",  
        ],
        links_small_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-931339795231-secret-of-beauty-lithocomplex-2-aktiv-dl",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-929996884901-neofam-fammask-8-talasso-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-859856427821-multizaschita-krem-secret-of-beauty-50-m"
        ],
        middle: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=910808266501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=929996884901",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",   
        ],
        links_middle: [
          "https://skecobeauty.com/lico/tproduct/495947610-910808266501-mineralno-solevoi-gel-mix-mineral-150-ml",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-929996884901-neofam-fammask-8-talasso-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be"
        ], 
        middle_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=910808266501", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=929996884901",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",   
        ],
        links_middle_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-910808266501-mineralno-solevoi-gel-mix-mineral-150-ml",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-929996884901-neofam-fammask-8-talasso-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be"
        ],
        big: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=910808266501", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=929996884901",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=191001658991",
        ],
        links_big: [
          "https://skecobeauty.com/lico/tproduct/495947610-910808266501-mineralno-solevoi-gel-mix-mineral-150-ml",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-929996884901-neofam-fammask-8-talasso-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-191001658991-krem-flyor-akva-amp-shine-skin-dlya-ezhe"
        ],
        big_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=910808266501", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=929996884901",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=191001658991",  
        ],
        links_big_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-910808266501-mineralno-solevoi-gel-mix-mineral-150-ml",
          "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni",
          "https://skecobeauty.com/lico/tproduct/495947610-929996884901-neofam-fammask-8-talasso-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-191001658991-krem-flyor-akva-amp-shine-skin-dlya-ezhe"
        ],
        antiage_small_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=443122908781",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=891171676011",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=338793218191&productuid=775327399761",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=839804032431",
        ],
        links_antiage_small_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-959346832181-secret-of-beauty-lithocomplex-3-universa",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-443122908781-secret-of-beauty-lithophytomask-6-suzhen",
          "https://skecobeauty.com/lico/tproduct/495947610-891171676011-secret-of-beauty-lithophytomask-2-liftin",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be",
          "https://skecobeauty.com/lico/tproduct/495947610-839804032431-intensivnoe-pitanie-krem-secret-of-beaut"
        ],
        antiage_small: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=443122908781",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=891171676011",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=338793218191&productuid=775327399761",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=839804032431",
        ],
        links_antiage_small: [
          "https://skecobeauty.com/lico/tproduct/495947610-959346832181-secret-of-beauty-lithocomplex-3-universa",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-443122908781-secret-of-beauty-lithophytomask-6-suzhen",
          "https://skecobeauty.com/lico/tproduct/495947610-891171676011-secret-of-beauty-lithophytomask-2-liftin",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be",
          "https://skecobeauty.com/lico/tproduct/495947610-839804032431-intensivnoe-pitanie-krem-secret-of-beaut"
        ],
        antiage_middle: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=910808266501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=423545571131",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=228393642461&productuid=592051998581",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=947538104371",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=953182360381&productuid=647970103161",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=184812489611&productuid=374304921701",
        ],
        links_antiage_middle: [
          "https://skecobeauty.com/lico/tproduct/495947610-910808266501-mineralno-solevoi-gel-mix-mineral-150-ml",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-423545571131-skulpt-black-maska-siyanie-amp-lifting-5",
          "https://skecobeauty.com/lico/tproduct/495947610-592051998581-neofam-fammask-5-podtyazhka-kozhi-vokrug",
          "https://skecobeauty.com/lico/tproduct/495947610-947538104371-krem-veki-amp-grand-effekt-dlya-ezhednev",
          "https://skecobeauty.com/lico/tproduct/495947610-647970103161-gelevii-krem-lifting-one-touch-50-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-374304921701-krem-multiprotektor-anti-eidzh-50-ml"
        ],
        antiage_middle_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=910808266501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=423545571131",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=228393642461&productuid=592051998581",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=947538104371",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=953182360381&productuid=647970103161",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=184812489611&productuid=374304921701",
        ],
        links_antiage_middle_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-910808266501-mineralno-solevoi-gel-mix-mineral-150-ml",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-423545571131-skulpt-black-maska-siyanie-amp-lifting-5",
          "https://skecobeauty.com/lico/tproduct/495947610-592051998581-neofam-fammask-5-podtyazhka-kozhi-vokrug",
          "https://skecobeauty.com/lico/tproduct/495947610-947538104371-krem-veki-amp-grand-effekt-dlya-ezhednev",
          "https://skecobeauty.com/lico/tproduct/495947610-647970103161-gelevii-krem-lifting-one-touch-50-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-374304921701-krem-multiprotektor-anti-eidzh-50-ml"
        ],
        antiage_big: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=476253741491&productuid=520922569961",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
        ],
        links_antiage_big: [
          "https://skecobeauty.com/lico/tproduct/495947610-520922569961-ln-science-lab-akva-non-stop",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti"
        ],
        antiage_big_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=476253741491&productuid=520922569961", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501", 
        ],
        links_antiage_big_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-520922569961-ln-science-lab-akva-non-stop",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti"
        ]
    },
    dry: {
        skinTypeInRound: 'Сухая',
        infoDashesInRound: ['Стянутость кожи и склонность к зуду',
                            'Сухость и шелушение',
                            'Практически не видны поры и нет жирного блеска',
                            'Тонкая, с заметной сеточкой капилляров',
                            'Тусклая', 
                            'Чувствительная к перепадам температур',
                            'Раннее появление морщинок'
                            ],
        skinDiscriptionHeader: 'сухая',
        skinDescription: 'Тип кожи, который производит мало кожного сала. Такой коже не хватает липидов для удержания влаги и формирования защитного барьера против внешних воздействий. Такая кожа отличается низкой эластичностью, ощущением стянутости и склонностью к зуду. Она легко раздражается под влиянием внешних факторов. Поэтому важно поддерживать водный баланс и защитные свойства кожи с помощью кремов, разработанных именно для сухой кожи.',
        small: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=422346175211",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991",
        ],
        links_small: [
          "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
          "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
          "https://skecobeauty.com/lico/tproduct/495947610-422346175211-secret-of-beauty-lithophytomask-3-akva-t",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be",
          "https://skecobeauty.com/lico/tproduct/495947610-342175923991-pitatelnii-krem-secret-of-beauty-50-ml"
        ],
        small_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=422346175211",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991", 
        ],
        links_small_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
          "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
          "https://skecobeauty.com/lico/tproduct/495947610-422346175211-secret-of-beauty-lithophytomask-3-akva-t",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be",
          "https://skecobeauty.com/lico/tproduct/495947610-342175923991-pitatelnii-krem-secret-of-beauty-50-ml"
        ],
        middle: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=123312724541&productuid=979644446961",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991", 
        ],
        links_middle: [
          "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
          "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
          "https://skecobeauty.com/lico/tproduct/495947610-979644446961-neofam-fammask-3-nasischenie-vlagoi-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be",
          "https://skecobeauty.com/lico/tproduct/495947610-342175923991-pitatelnii-krem-secret-of-beauty-50-ml"
        ],
        middle_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=123312724541&productuid=979644446961",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991",
        ],
        links_middle_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
          "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
          "https://skecobeauty.com/lico/tproduct/495947610-979644446961-neofam-fammask-3-nasischenie-vlagoi-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be",
          "https://skecobeauty.com/lico/tproduct/495947610-342175923991-pitatelnii-krem-secret-of-beauty-50-ml"
        ],
        big: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=795245231961", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=123312724541&productuid=979644446961",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=705356842351&productuid=441763215891",  
        ],
        links_big: [
          "https://skecobeauty.com/lico/tproduct/495947610-795245231961-mix-mineral-gel-blackampwhite-dvoinoi-ef",
          "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
          "https://skecobeauty.com/lico/tproduct/495947610-979644446961-neofam-fammask-3-nasischenie-vlagoi-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be",
          "https://skecobeauty.com/lico/tproduct/495947610-342175923991-pitatelnii-krem-secret-of-beauty-50-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-441763215891-sivorotka-akvavita-30-ml"
        ],
        big_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=795245231961",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=123312724541&productuid=979644446961",    
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=775327399761",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=705356842351&productuid=441763215891",  
        ],
        links_big_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-795245231961-mix-mineral-gel-blackampwhite-dvoinoi-ef",
          "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
          "https://skecobeauty.com/lico/tproduct/495947610-979644446961-neofam-fammask-3-nasischenie-vlagoi-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-775327399761-uvlazhnenie-i-svezhest-krem-secret-of-be",
          "https://skecobeauty.com/lico/tproduct/495947610-342175923991-pitatelnii-krem-secret-of-beauty-50-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-441763215891-sivorotka-akvavita-30-ml"
        ],
        antiage_small_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=194869290771&productuid=942553947261", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=621909121331",
        ],
        links_antiage_small_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-942553947261-skulpting-maska-sekret-krasoti-talasso-f",
          "https://skecobeauty.com/lico/tproduct/495947610-891171676011-secret-of-beauty-lithophytomask-2-liftin",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-342175923991-pitatelnii-krem-secret-of-beauty-50-m",
          "https://skecobeauty.com/lico/tproduct/495947610-621909121331-revitalifting-krem-secret-of-beauty-50-m"
        ],
        antiage_small: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=194869290771&productuid=942553947261", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=342175923991",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=621909121331",
        ],
        links_antiage_small: [
          "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-942553947261-skulpting-maska-sekret-krasoti-talasso-f",
          "https://skecobeauty.com/lico/tproduct/495947610-891171676011-secret-of-beauty-lithophytomask-2-liftin",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-342175923991-pitatelnii-krem-secret-of-beauty-50-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-621909121331-revitalifting-krem-secret-of-beauty-50-m"
        ],
        antiage_middle: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=123312724541&productuid=979644446961",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=228393642461&productuid=592051998581",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=670711576791&productuid=597409964461",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=123312724541&productuid=276830546331",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=184812489611&productuid=374304921701",
        ],
        links_antiage_middle: [
          "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-979644446961-neofam-fammask-3-nasischenie-vlagoi-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-592051998581-neofam-fammask-5-podtyazhka-kozhi-vokrug",
          "https://skecobeauty.com/lico/tproduct/495947610-597409964461-krem-veki-amp-kontur-relaks-dlya-ezhedne",
          "https://skecobeauty.com/lico/tproduct/495947610-276830546331-krem-d-panthenol-max-beauty-50-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-374304921701-krem-multiprotektor-anti-eidzh-50-ml"
        ],
        antiage_middle_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=123312724541&productuid=979644446961",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=228393642461&productuid=592051998581",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=670711576791&productuid=597409964461",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=191001658991",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=184812489611&productuid=374304921701",
        ],
        links_antiage_middle_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-191001658991-krem-flyor-akva-amp-shine-skin-dlya-ezhe",
          "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-979644446961-neofam-fammask-3-nasischenie-vlagoi-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-592051998581-neofam-fammask-5-podtyazhka-kozhi-vokrug",
          "https://skecobeauty.com/lico/tproduct/495947610-597409964461-krem-veki-amp-kontur-relaks-dlya-ezhedne",
          "https://skecobeauty.com/lico/tproduct/495947610-191001658991-krem-flyor-akva-amp-shine-skin-dlya-ezhe",
          "https://skecobeauty.com/lico/tproduct/495947610-374304921701-krem-multiprotektor-anti-eidzh-50-ml"
        ],
        antiage_big: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=794291729031&productuid=254399696161",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=705356842351&productuid=817106787901", 
        ],
        links_antiage_big: [
          "https://skecobeauty.com/lico/tproduct/495947610-254399696161-ln-science-lab-ekspress-black-plyus",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-817106787901-sivorotka-akva-forsazh-amp-urban-skin-30"
        ],
        antiage_big_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",   
          "https://store.tildacdn.com/api/getproduct/?storepartuid=794291729031&productuid=254399696161",  
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501", 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=705356842351&productuid=817106787901",  
        ],
        links_antiage_big_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-254399696161-ln-science-lab-ekspress-black-plyus",
          "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
          "https://skecobeauty.com/lico/tproduct/495947610-817106787901-sivorotka-akva-forsazh-amp-urban-skin-30"
        ]
    },
    greasy: {
        skinTypeInRound: 'Жирная',
        infoDashesInRound: ['Жирный блеск',
                            'Начинает блестеть почти сразу после умывания',
                            'На ней заметны расширенные поры',
                            'Имеется склонность к высыпаниям и воспалениям',
                            ],
        skinDiscriptionHeader: 'жирная',
        skinDescription: 'Тип кожи с повышенной выработкой кожного сала, что проявляется активным блеском на всей поверхности лица, расширенными порами, чёрными точками, склонностью к появлению воспалений (акне). Восстановить естественный баланс кожи помогают специальные средства для очищения и ухода.',
        small: [
        "https://store.tildacdn.com/api/getproduct/?storepartuid=471060865641&productuid=178219212531",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=336719564511",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=738271429281",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=854182657951",
        ],
        links_small: [
          "https://skecobeauty.com/lico/tproduct/495947610-959346832181-secret-of-beauty-lithocomplex-3-universa",
          "https://skecobeauty.com/zhirnaya/tproduct/501701153-186730942041-secret-of-beauty-lithophytolotion-3-dlya",
          "https://skecobeauty.com/lico/tproduct/495947610-336719564511-secret-of-beauty-lithophytomask-4-ot-zhi",
          "https://skecobeauty.com/lico/tproduct/495947610-738271429281-dlya-problemnoi-kozhi-krem-secret-of-bea",
          "https://skecobeauty.com/lico/tproduct/495947610-854182657951-mikrobionorm-krem-secret-of-beauty-50-ml"
        ],
        small_makeup: [
        "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=471060865641&productuid=178219212531",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=336719564511",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=738271429281",   
        "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=854182657951", 
        ],
        links_small_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-959346832181-secret-of-beauty-lithocomplex-3-universa",
          "https://skecobeauty.com/zhirnaya/tproduct/501701153-186730942041-secret-of-beauty-lithophytolotion-3-dlya",
          "https://skecobeauty.com/lico/tproduct/495947610-336719564511-secret-of-beauty-lithophytomask-4-ot-zhi",
          "https://skecobeauty.com/lico/tproduct/495947610-738271429281-dlya-problemnoi-kozhi-krem-secret-of-bea",
          "https://skecobeauty.com/lico/tproduct/495947610-854182657951-mikrobionorm-krem-secret-of-beauty-50-ml"
        ],
        middle: [
        "https://store.tildacdn.com/api/getproduct/?storepartuid=198478512101&productuid=687084660361",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=104607745991&productuid=526148438211",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=738271429281",    
        "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=854182657951", 
        ],
        links_middle: [
          "https://skecobeauty.com/lico/tproduct/495947610-687084660361-neofam-silver-lithocomplex-2-70-g",
          "https://skecobeauty.com/zhirnaya/tproduct/501701153-186730942041-secret-of-beauty-lithophytolotion-3-dlya",
          "https://skecobeauty.com/lico/tproduct/495947610-526148438211-neofam-fammask-4-norma-kontrol-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-738271429281-dlya-problemnoi-kozhi-krem-secret-of-bea",
          "https://skecobeauty.com/lico/tproduct/495947610-854182657951-mikrobionorm-krem-secret-of-beauty-50-ml",
        ],
        middle_makeup: [
        "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",   
        "https://store.tildacdn.com/api/getproduct/?storepartuid=198478512101&productuid=687084660361",   
        "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=104607745991&productuid=526148438211",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=738271429281", 
        "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=854182657951",  
        ],
        links_middle_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-687084660361-neofam-silver-lithocomplex-2-70-g",
          "https://skecobeauty.com/zhirnaya/tproduct/501701153-186730942041-secret-of-beauty-lithophytolotion-3-dlya",
          "https://skecobeauty.com/lico/tproduct/495947610-526148438211-neofam-fammask-4-norma-kontrol-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-738271429281-dlya-problemnoi-kozhi-krem-secret-of-bea",
          "https://skecobeauty.com/lico/tproduct/495947610-854182657951-mikrobionorm-krem-secret-of-beauty-50-ml"
        ],
        big: [
        "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=466219587591", 
        "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=104607745991&productuid=526148438211",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=621844059111&productuid=378571572621",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=738271429281",    
        "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=854182657951",
        ],
        links_big: [
          "https://skecobeauty.com/lico/tproduct/495947610-466219587591-mix-mineral-sredstvo-dlya-ezhednevnogo-u",
          "https://skecobeauty.com/zhirnaya/tproduct/501701153-186730942041-secret-of-beauty-lithophytolotion-3-dlya",
          "https://skecobeauty.com/lico/tproduct/495947610-526148438211-neofam-fammask-4-norma-kontrol-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-378571572621-neofam-famsoap-2-dlya-glubokoi-gigieni-n",
          "https://skecobeauty.com/lico/tproduct/495947610-738271429281-dlya-problemnoi-kozhi-krem-secret-of-bea",
          "https://skecobeauty.com/lico/tproduct/495947610-854182657951-mikrobionorm-krem-secret-of-beauty-50-ml"
        ],
        big_makeup: [
        "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",  
        "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=466219587591",   
        "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=104607745991&productuid=526148438211",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=621844059111&productuid=378571572621",
        "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=738271429281",   
        "https://store.tildacdn.com/api/getproduct/?storepartuid=539399588861&productuid=854182657951",   
        ],
        links_big_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-466219587591-mix-mineral-sredstvo-dlya-ezhednevnogo-u",
          "https://skecobeauty.com/zhirnaya/tproduct/501701153-186730942041-secret-of-beauty-lithophytolotion-3-dlya",
          "https://skecobeauty.com/lico/tproduct/495947610-526148438211-neofam-fammask-4-norma-kontrol-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-378571572621-neofam-famsoap-2-dlya-glubokoi-gigieni-n",
          "https://skecobeauty.com/lico/tproduct/495947610-738271429281-dlya-problemnoi-kozhi-krem-secret-of-bea",
          "https://skecobeauty.com/lico/tproduct/495947610-854182657951-mikrobionorm-krem-secret-of-beauty-50-ml"
        ]
    },
    dry_sensative_rosacea: {
        skinTypeInRound: 'Сухая чувствительная кожа с куперозом',
        infoDashesInRound: ['Возникает на чувствительной и сухой коже',
                            'Зудит и может даже болеть',
                            'Кожа становится постоянно красной',
                            ],
        skinDiscriptionHeader: 'cухая чувствительная с куперозом',
        skinDescription: 'Купероз проявляется сеточкой сосудов, которая отчетливо видна сквозь кожу, так как сосудистая стенка теряет эластичность, под давлением крови сосуды расширяются, а вернуться в прежнее состояние уже не могут. Оставаясь расширенными, они становятся заметны на лице.',
        small: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=184812489611&productuid=555878215581",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=670711576791&productuid=597409964461",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=455912331531",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=637410151941",
        ],
        links_small: [
          "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
          "https://skecobeauty.com/lico/tproduct/495947610-555878215581-secret-of-beauty-lithophytomask-8-antiku",
          "https://skecobeauty.com/lico/tproduct/495947610-597409964461-krem-veki-amp-kontur-relaks-dlya-ezhedne",
          "https://skecobeauty.com/lico/tproduct/495947610-455912331531-dlya-chuvstvitelnoi-kozhi-krem-secret-of",
          "https://skecobeauty.com/lico/tproduct/495947610-637410151941-korrektsiya-kuperoza-krem-secret-of-beau"
        ],
        small_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=184812489611&productuid=555878215581",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=670711576791&productuid=597409964461",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=455912331531",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=637410151941",
        ],
        links_small_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
          "https://skecobeauty.com/lico/tproduct/495947610-555878215581-secret-of-beauty-lithophytomask-8-antiku",
          "https://skecobeauty.com/lico/tproduct/495947610-597409964461-krem-veki-amp-kontur-relaks-dlya-ezhedne",
          "https://skecobeauty.com/lico/tproduct/495947610-455912331531-dlya-chuvstvitelnoi-kozhi-krem-secret-of",
          "https://skecobeauty.com/lico/tproduct/495947610-637410151941-korrektsiya-kuperoza-krem-secret-of-beau"
        ],
        middle_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=338793218191&productuid=960636635281",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=539411662671&productuid=488344545361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=787854290421",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=184812489611&productuid=374304921701",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=637410151941",
        ],
        links_middle_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-960636635281-neofam-silver-low-salts-lithocomplex-3-d",
          "https://skecobeauty.com/lico/tproduct/495947610-488344545361-neofam-fammask-7-antikuperoz-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-787854290421-krem-veki-amp-neo-perfection-15-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-374304921701-krem-multiprotektor-anti-eidzh-50-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-637410151941-korrektsiya-kuperoza-krem-secret-of-beau"
        ],
        middle: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=338793218191&productuid=960636635281",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=539411662671&productuid=488344545361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=228393642461&productuid=592051998581",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=455912331531",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=637410151941",
        ],
        links_middle: [
          "https://skecobeauty.com/lico/tproduct/495947610-960636635281-neofam-silver-low-salts-lithocomplex-3-d",
          "https://skecobeauty.com/lico/tproduct/495947610-488344545361-neofam-fammask-7-antikuperoz-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-592051998581-neofam-fammask-5-podtyazhka-kozhi-vokrug",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-455912331531-dlya-chuvstvitelnoi-kozhi-krem-secret-of",
          "https://skecobeauty.com/lico/tproduct/495947610-637410151941-korrektsiya-kuperoza-krem-secret-of-beau"
        ],
        big: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=338793218191&productuid=960636635281",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=539411662671&productuid=488344545361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=637410151941",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=184812489611&productuid=374304921701",
        ],
        links_big: [
          "https://skecobeauty.com/lico/tproduct/495947610-960636635281-neofam-silver-low-salts-lithocomplex-3-d",
          "https://skecobeauty.com/lico/tproduct/495947610-488344545361-neofam-fammask-7-antikuperoz-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-637410151941-korrektsiya-kuperoza-krem-secret-of-beau",
          "https://skecobeauty.com/lico/tproduct/495947610-374304921701-krem-multiprotektor-anti-eidzh-50-ml"
        ],
        big_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=338793218191&productuid=960636635281",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=539411662671&productuid=488344545361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=787854290421",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=705356842351&productuid=817106787901",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=184812489611&productuid=374304921701",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=637410151941",
        ],
        links_big_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-960636635281-neofam-silver-low-salts-lithocomplex-3-d",
          "https://skecobeauty.com/lico/tproduct/495947610-488344545361-neofam-fammask-7-antikuperoz-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-787854290421-krem-veki-amp-neo-perfection-15-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-817106787901-sivorotka-akva-forsazh-amp-urban-skin-30",
          "https://skecobeauty.com/lico/tproduct/495947610-374304921701-krem-multiprotektor-anti-eidzh-50-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-637410151941-korrektsiya-kuperoza-krem-secret-of-beau",
          ""
        ]
    },
combined_pigmentation: {
          skinTypeInRound: 'Комбинированная кожа с пигментацией',
          infoDashesInRound: ['Родинки',
                              'Веснушки',
                              'Лентиго (возрастная пигментация)',
                                  'Постакне',
                                  'Мелазма (пигментация, возникающая вследствие гормональных изменений)'
                              ],
          skinDiscriptionHeader: 'комбинированная с пигментацией',
          skinDescription: 'Кожа, склонная к пигментации, нуждается в особом комплексном уходе, содержащем в основе многоуровневые процедуры. Косметика против пигментации направлена преимущественно на отшелушивание поверхностного слоя эпидермиса, обновление кожи и выравнивание ее тона. Такая кожа имеет все признаки комбинированной кожи, поэтому для ухода за ней используется средства, предназначенные именно для комбинированной кожи.',
         small_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=931339795231",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=471060865641&productuid=409826012981",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=836343534411",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
         ],
         links_small_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-436254432441-secret-of-beauty-lithocomplex-2-aktiv-dl",
          "https://skecobeauty.com/lico/tproduct/495947610-178219212531-neofam-fammask-6-rovnii-ton-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-409826012981-secret-of-beauty-lithophytomask-7-tsveto",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-836343534411-fotozaschitnii-krem-secret-of-beauty-50",
          "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
         ],
         small: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=931339795231",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=471060865641&productuid=178219212531",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=836343534411",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
         ],
         links_small: [
          "https://skecobeauty.com/lico/tproduct/495947610-436254432441-secret-of-beauty-lithocomplex-2-aktiv-dl", 
          "https://skecobeauty.com/lico/tproduct/495947610-178219212531-neofam-fammask-6-rovnii-ton-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-178219212531-neofam-fammask-6-rovnii-ton-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
          "https://skecobeauty.com/lico/tproduct/495947610-836343534411-fotozaschitnii-krem-secret-of-beauty-50",
          "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
         ],
         middle_makeup: [ 
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=359028644021",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=947538104371",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=558053778761&productuid=246109770851",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
         ],
         links_middle_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
          "https://skecobeauty.com/lico/tproduct/495947610-178219212531-neofam-fammask-6-rovnii-ton-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-359028644021-gel-gommazh-gidratatsiya-i-super-light-5",
          "https://skecobeauty.com/lico/tproduct/495947610-947538104371-krem-veki-amp-grand-effekt-dlya-ezhednev",
          "https://skecobeauty.com/lico/tproduct/495947610-246109770851-vv-krem-spf-25-ton-1-karamel-30-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b "
         ],
         middle: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=359028644021",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=947538104371",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=558053778761&productuid=246109770851",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
         ],
         links_middle: [
          "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
          "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
          "https://skecobeauty.com/lico/tproduct/495947610-359028644021-gel-gommazh-gidratatsiya-i-super-light-5",
          "https://skecobeauty.com/lico/tproduct/495947610-947538104371-krem-veki-amp-grand-effekt-dlya-ezhednev",
          "https://skecobeauty.com/lico/tproduct/495947610-246109770851-vv-krem-spf-25-ton-1-karamel-30-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
         ],
         big: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=910808266501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=359028644021",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=947538104371",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=558053778761&productuid=246109770851",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=471060865641&productuid=998966169031",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
         ],
         links_big: [
          "https://skecobeauty.com/lico/tproduct/495947610-910808266501-mineralno-solevoi-gel-mix-mineral-150-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-178219212531-neofam-fammask-6-rovnii-ton-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-359028644021-gel-gommazh-gidratatsiya-i-super-light-5",
          "https://skecobeauty.com/lico/tproduct/495947610-947538104371-krem-veki-amp-grand-effekt-dlya-ezhednev",
          "https://skecobeauty.com/lico/tproduct/495947610-246109770851-vv-krem-spf-25-ton-1-karamel-30-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b",
          "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
         ],
         big_makeup: [
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=910808266501",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=186730942041",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=359028644021",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=947538104371",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=558053778761&productuid=246109770851",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=471060865641&productuid=998966169031",
          "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
         ],
         links_big_makeup: [
          "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
          "https://skecobeauty.com/lico/tproduct/495947610-910808266501-mineralno-solevoi-gel-mix-mineral-150-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-178219212531-neofam-fammask-6-rovnii-ton-50-g",
          "https://skecobeauty.com/lico/tproduct/495947610-359028644021-gel-gommazh-gidratatsiya-i-super-light-5", 
          "https://skecobeauty.com/lico/tproduct/495947610-947538104371-krem-veki-amp-grand-effekt-dlya-ezhednev",
          "https://skecobeauty.com/lico/tproduct/495947610-246109770851-vv-krem-spf-25-ton-1-karamel-30-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-998966169031-sivorotka-skin-tone-30-ml",
          "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
         ]
      },
      dry_normal_pigmentation: {
          skinTypeInRound: 'Сухая и нормальная кожа с пигментацией',
          infoDashesInRound: ['Родинки',
                              'Веснушки',
                              'Лентиго (возрастная пигментация)',
                                  'Постакне',
                                  'Мелазма (пигментация, возникающая вследствие гормональных изменений)'
                              ],
          skinDiscriptionHeader: 'cухая и нормальная с пигментацией',
          skinDescription: 'Кожа, склонная к пигментации, нуждается в особом комплексном уходе, содержащем в основе многоуровневые процедуры. Косметика против пигментации направлена преимущественно на отшелушивание поверхностного слоя эпидермиса, обновление кожи и выравнивание ее тона. Параллельно уход для данного типа кожи должен быть направлен на устранение сухости, обезвоживания и раздражения.',
          small_makeup: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=471060865641&productuid=409826012981",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=237524179031&productuid=558422194161",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=836343534411",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
          ],
          links_small_makeup: [
            "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
            "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
            "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
            "https://skecobeauty.com/lico/tproduct/495947610-409826012981-secret-of-beauty-lithophytomask-7-tsveto",
            "https://skecobeauty.com/lico/tproduct/495947610-558422194161-super-duet-dlya-kozhi-vokrug-glaz-ot-sci",
            "https://skecobeauty.com/lico/tproduct/495947610-836343534411-fotozaschitnii-krem-secret-of-beauty-50",
            "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
          ],
          small: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=471060865641&productuid=409826012981",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=237524179031&productuid=558422194161",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=836343534411",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
          ],
          links_small: [
            "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
            "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
            "https://skecobeauty.com/lico/tproduct/495947610-409826012981-secret-of-beauty-lithophytomask-7-tsveto",
            "https://skecobeauty.com/lico/tproduct/495947610-558422194161-super-duet-dlya-kozhi-vokrug-glaz-ot-sci",
            "https://skecobeauty.com/lico/tproduct/495947610-836343534411-fotozaschitnii-krem-secret-of-beauty-50",
            "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
          ],
          middle_makeup: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=359028644021",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=947538104371",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=558053778761&productuid=246109770851",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
          ],
          links_middle_makeup: [
            "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
            "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
            "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
            "https://skecobeauty.com/lico/tproduct/495947610-359028644021-gel-gommazh-gidratatsiya-i-super-light-5",
            "https://skecobeauty.com/lico/tproduct/495947610-947538104371-krem-veki-amp-grand-effekt-dlya-ezhednev",
            "https://skecobeauty.com/lico/tproduct/495947610-246109770851-vv-krem-spf-25-ton-1-karamel-30-ml",
            "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
          ],
          middle: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=359028644021",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=947538104371",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=558053778761&productuid=246109770851",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
          ],
          links_middle: [
            "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
            "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
            "https://skecobeauty.com/lico/tproduct/495947610-359028644021-gel-gommazh-gidratatsiya-i-super-light-5",
            "https://skecobeauty.com/lico/tproduct/495947610-947538104371-krem-veki-amp-grand-effekt-dlya-ezhednev",
            "https://skecobeauty.com/lico/tproduct/495947610-246109770851-vv-krem-spf-25-ton-1-karamel-30-ml",
            "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
          ],
          big: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=910808266501",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=359028644021",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=947538104371",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=558053778761&productuid=246109770851",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=471060865641&productuid=998966169031",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
          ],
          links_big: [
            "https://skecobeauty.com/lico/tproduct/495947610-910808266501-mineralno-solevoi-gel-mix-mineral-150-ml",
            "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
            "https://skecobeauty.com/lico/tproduct/495947610-359028644021-gel-gommazh-gidratatsiya-i-super-light-5",
            "https://skecobeauty.com/lico/tproduct/495947610-947538104371-krem-veki-amp-grand-effekt-dlya-ezhednev",
            "https://skecobeauty.com/lico/tproduct/495947610-246109770851-vv-krem-spf-25-ton-1-karamel-30-ml",
            "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b",
            "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
          ],
          big_makeup: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=312776055221&productuid=910808266501",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=354413572201",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=563457200741&productuid=359028644021",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=947538104371",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=558053778761&productuid=246109770851",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=471060865641&productuid=998966169031",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=112820379971",
          ],
          links_big_makeup: [
            "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
            "https://skecobeauty.com/lico/tproduct/495947610-910808266501-mineralno-solevoi-gel-mix-mineral-150-ml",
            "https://skecobeauty.com/suchaya/tproduct/501701328-354413572201-secret-of-beauty-lithophytolotion-2-sbor",
            "https://skecobeauty.com/lico/tproduct/495947610-359028644021-gel-gommazh-gidratatsiya-i-super-light-5",
            "https://skecobeauty.com/lico/tproduct/495947610-947538104371-krem-veki-amp-grand-effekt-dlya-ezhednev",
            "https://skecobeauty.com/lico/tproduct/495947610-246109770851-vv-krem-spf-25-ton-1-karamel-30-ml",
            "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b",
            "https://skecobeauty.com/lico/tproduct/495947610-112820379971-osvetlenie-pigmentatsii-krem-secret-of-b"
          ]
      },
  dry_normal_flaccid: {
            skinTypeInRound: 'Сухая или нормальная вялая кожа (птоз)',
            infoDashesInRound: ['Стянутость кожи и склонность к зуду',
                                'Сухость и шелушение',
                                'Практически не видны поры и нет жирного блеска',
                                    'Тонкая, с заметной сеточкой капилляров',
                                    'Тусклая',
                                    'Чувствительная к перепадам температур',
                                    'Раннее появление морщинок'
                                ],
            skinDiscriptionHeader: 'cухая или нормальная вялая (птоз)',
            skinDescription: 'Этот тип кожи характеризуется опусканием мягких тканей и потерей четких очертаний овала лица, что происходит из-за нарушения водного баланса, задержки жидкости, которая тянет ткани вниз и из-за недостаточной увлажненности кожи. Также это возрастная проблема, усугубленная вредными привычками (пищевыми, мимическими) и образом жизни. Имеет все признаки сухой или нормальной кожи, поэтому для ухода за ней используется средства, предназначенные также для ухода за сухой или нормальной кожей',
      small_makeup: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=644701769611",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=891171676011",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=988426740971",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=136241465261",
          ],
          links_small_makeup: [
            "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
            "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
            "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
            "https://skecobeauty.com/lico/tproduct/495947610-644701769611-secret-of-beauty-lithophytomask-5-regene",
            "https://skecobeauty.com/lico/tproduct/495947610-891171676011-secret-of-beauty-lithophytomask-2-liftin",
            "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
            "https://skecobeauty.com/lico/tproduct/495947610-988426740971-idealnii-kontur-podtyazhka-krem-secret-o",
            "https://skecobeauty.com/lico/tproduct/495947610-136241465261-regeneratsiya-krem-secret-of-beauty-50-m"
          ],
       small: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=643345229181&productuid=623718607431",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=644701769611",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=300959858121&productuid=891171676011",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=352674049221",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=988426740971",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=136241465261",
          ],
          links_small: [
            "https://skecobeauty.com/suchaya/tproduct/501701328-623718607431-secret-of-beauty-lithocomplex-1-delikat",
            "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
            "https://skecobeauty.com/lico/tproduct/495947610-644701769611-secret-of-beauty-lithophytomask-5-regene",
            "https://skecobeauty.com/lico/tproduct/495947610-891171676011-secret-of-beauty-lithophytomask-2-liftin",
            "https://skecobeauty.com/lico/tproduct/495947610-352674049221-konturnii-krem-secret-of-beauty-dlya-vek",
            "https://skecobeauty.com/lico/tproduct/495947610-988426740971-idealnii-kontur-podtyazhka-krem-secret-o",
            "https://skecobeauty.com/lico/tproduct/495947610-136241465261-regeneratsiya-krem-secret-of-beauty-50-m"
          ],
          middle_makeup: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=194869290771&productuid=942553947261",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=237524179031&productuid=558422194161",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=686959822611",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=953182360381&productuid=647970103161",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=705356842351&productuid=233466183901",
          ],
          links_middle_makeup: [
            "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
            "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
            "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
            "https://skecobeauty.com/lico/tproduct/495947610-942553947261-skulpting-maska-sekret-krasoti-talasso-f",
            "https://skecobeauty.com/lico/tproduct/495947610-558422194161-super-duet-dlya-kozhi-vokrug-glaz-ot-sci",
            "https://skecobeauty.com/lico/tproduct/495947610-686959822611-krem-anti-eidzh-amp-korrektsiya-ovala-dl",
            "https://skecobeauty.com/lico/tproduct/495947610-647970103161-gelevii-krem-lifting-one-touch-50-ml",
            "https://skecobeauty.com/lico/tproduct/495947610-233466183901-sivorotka-aptoz-effekt-amp-syn-multipept"
          ],
          middle: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=783174909551&productuid=262898948361",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=194869290771&productuid=942553947261",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=237524179031&productuid=558422194161",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=216965075831&productuid=686959822611",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=953182360381&productuid=647970103161",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=705356842351&productuid=233466183901",
          ],
          links_middle: [
            "https://skecobeauty.com/lico/tproduct/495947610-262898948361-neofam-silver-lithocomplex-1-dlya-ochisc",
            "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
            "https://skecobeauty.com/lico/tproduct/495947610-942553947261-skulpting-maska-sekret-krasoti-talasso-f",
            "https://skecobeauty.com/lico/tproduct/495947610-558422194161-super-duet-dlya-kozhi-vokrug-glaz-ot-sci",
            "https://skecobeauty.com/lico/tproduct/495947610-686959822611-krem-anti-eidzh-amp-korrektsiya-ovala-dl",
            "https://skecobeauty.com/lico/tproduct/495947610-647970103161-gelevii-krem-lifting-one-touch-50-ml",
            "https://skecobeauty.com/lico/tproduct/495947610-233466183901-sivorotka-aptoz-effekt-amp-syn-multipept"
          ],
         big_makeup: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
            "https://store.tildacdn.com/api/getproduct/?storepartuid=794291729031&productuid=793339991491",
          ],
          links_big_makeup: [
            "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
            "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
            "https://skecobeauty.com/lico/tproduct/495947610-793339991491-ln-science-lab-elita-black"
          ],
          big: [
            "https://store.tildacdn.com/api/getproduct/?storepartuid=476253741491&productuid=520922569961", 
            "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=207050025221",  
          ],
          links_big: [
            "https://skecobeauty.com/lico/tproduct/495947610-520922569961-ln-science-lab-akva-non-stop",
            "https://skecobeauty.com/ton/tproduct/501699434-207050025221-secret-of-beauty-lithophytolotion-1-toni"
          ]
        },
        combined_flaccid: {
              skinTypeInRound: 'Комбинированная вялая кожа (птоз)',
              infoDashesInRound: ['T-зона выглядит блестящей и склонна к образованию высыпаний, комедонов, угрей',
                                  'Расширенные поры в Т-зоне',
                                  'Кожа на щеках нормальная или даже сухая',
                                      'Сухие участки склонны к шелушению и образованию морщинок',
                                      'Тусклая кожа без здорового сияния'
                                  ],
              skinDiscriptionHeader: 'комбинированная вялая (птоз)',
              skinDescription: 'Этот тип кожи характеризуется опусканием мягких тканей и потерей четких очертаний овала лица, что происходит из-за нарушения водного баланса, задержки жидкости, которая тянет ткани вниз и из-за недостаточной увлажненности кожи. Также это возрастная проблема, усугубленная вредными привычками (пищевыми, мимическими) и образом жизни. Имеет все признаки комбинированной кожи, поэтому для ухода за ней используется средства, предназначенные именно для комбинированной кожи',
              antiage_small: [
                "https://store.tildacdn.com/api/getproduct/?storepartuid=380978287441&productuid=428827851171",
                "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501", 
              ],
              links_antiage_small: [
                "https://skecobeauty.com/lico/tproduct/495947610-428827851171-ln-science-lab-ekspress",
                "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti "
              ],
              antiage_small_makeup: [
                "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",   
                "https://store.tildacdn.com/api/getproduct/?storepartuid=380978287441&productuid=428827851171",
                "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501", 
              ],
              links_antiage_small_makeup: [
                "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
                "https://skecobeauty.com/lico/tproduct/495947610-428827851171-ln-science-lab-ekspress",
                "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti"
              ],
              antiage_middle: [
                "https://store.tildacdn.com/api/getproduct/?storepartuid=476253741491&productuid=978662514121", 
                "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501", 
              ],
              links_antiage_middle: [
                "https://skecobeauty.com/lico/tproduct/495947610-978662514121-ln-science-lab-grand-effekt-35",
                "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti"
              ],
              antiage_middle_makeup: [
                "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",  
                "https://store.tildacdn.com/api/getproduct/?storepartuid=476253741491&productuid=978662514121",  
                "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501", 
              ],
              links_antiage_middle_makeup: [
                "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
                "https://skecobeauty.com/lico/tproduct/495947610-978662514121-ln-science-lab-grand-effekt-35",
                "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti"
              ],
              antiage_big_makeup: [
                "https://store.tildacdn.com/api/getproduct/?storepartuid=914269674231&productuid=144086268001",
                "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
                "https://store.tildacdn.com/api/getproduct/?storepartuid=476253741491&productuid=978662514121",
              ],
              links_antiage_big_makeup: [
                "https://skecobeauty.com/lico/tproduct/495947610-144086268001-molochko-ochischenie-demakiyazh-krem-sec",
                "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
                "https://skecobeauty.com/lico/tproduct/495947610-978662514121-ln-science-lab-grand-effekt-35"
              ],
              antiage_big: [
                "https://store.tildacdn.com/api/getproduct/?storepartuid=598078663491&productuid=668110398501",
                "https://store.tildacdn.com/api/getproduct/?storepartuid=476253741491&productuid=978662514121",
              ],
              links_antiage_big: [
                "https://skecobeauty.com/ton/tproduct/501699434-668110398501-secret-of-beauty-lithophytolotion-4-anti",
                "https://skecobeauty.com/lico/tproduct/495947610-978662514121-ln-science-lab-grand-effekt-35"
              ]
          },
};

function getResultsFromGoogleSheets() {
    var app = "https://script.google.com/macros/s/AKfycbxA_qCUXvon7gnRBMnIqPDo6sWxfagzU9ydrKWhDajlhPAC9xNzfcc55LDl_lhOovmQZg/exec";
    xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
      if (xhr.status == 200) {
         try {
             var r = JSON.parse(xhr.responseText),
             clientResults = r["result"];
             let lastClientResult = clientResults[clientResults.length - 1];
             lastClientResult.forEach((element) => {
                  if (element === "нет" || element === "До 6-7 тысяч" || element === "От 7 до 15 тысяч" || element === "Неограниченный бюджет" || element === "45+" || element === "16-25" || element === "25-45") {
                    return element;
                  }
                  if (element === "да" || element === "ежедневно или по необходимости") {
                    return lastClientResult[lastClientResult.indexOf(element)] = true;
                  }
                  if (element === "не делаю совсем") {
                    return lastClientResult[lastClientResult.indexOf(element)] = false;
                  }
             });
             processingResults(lastClientResult)
         } catch(e) {}
      } 
    }
    xhr.send()
 }
 getResultsFromGoogleSheets();

function processingResults(testResult) {
  let suitableCart;
  let productsArr;
  let linksArr;
  let aniage_normal = testResult[0] && testResult[1] && testResult[3] && testResult[6] && testResult[10] === "45+";
  if (aniage_normal) {
    suitableCart = preparedCarts.normal;
    if (testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.normal.antiage_small_makeup; linksArr = preparedCarts.normal.links_antiage_small_makeup; //1
    }
    if (!testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.normal.antiage_small; linksArr = preparedCarts.normal.links_antiage_small;//2
    }
    if (testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.normal.antiage_middle_makeup; linksArr = preparedCarts.normal.links_antiage_middle_makeup;//3
    }
    if (!testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.normal.antiage_middle; linksArr = preparedCarts.normal.links_antiage_middle;//4
    }
    if (testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.normal.antiage_big_makeup; linksArr = preparedCarts.normal.links_antiage_big_makeup;//5
    }
    if (!testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.normal.antiage_big; linksArr = preparedCarts.normal.links_antiage_big;//6
    }
  }
  let normal = testResult[3] && testResult[4] && testResult[5] && testResult[6];
  if (normal) {
    suitableCart = preparedCarts.normal;
    if (testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.normal.small_makeup; linksArr = preparedCarts.normal.links_small_makeup;
    }
    if (!testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.normal.small; linksArr = preparedCarts.normal.links_small;
    }
    if (testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.normal.middle_makeup; linksArr = preparedCarts.normal.links_middle_makeup;
    }
    if (!testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.normal.middle; linksArr = preparedCarts.normal.links_middle;
    }
    if (testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.normal.big_makeup; linksArr = preparedCarts.normal.links_big_makeup;
    }
    if (!testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.normal.big; linksArr = preparedCarts.normal.links_big;
    }
  }
  let antiage_combined = testResult[4] && testResult[0] && testResult[1] && testResult[3] && testResult[5] && testResult[6] && testResult[10] === "45+";
  if (antiage_combined) {
    suitableCart = preparedCarts.combined;
    if (testResult[8] && testResult[9] === "До 6-7 тысяч") {
     productsArr = preparedCarts.combined.antiage_small_makeup; linksArr = preparedCarts.antiage_combined.links_antiage_small_makeup;//7
    }
    if (!testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.combined.antiage_small; linksArr = preparedCarts.antiage_combined.links_antiage_small;//8
    }
    if (!testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.combined.antiage_middle; linksArr = preparedCarts.antiage_combined.links_antiage_middle;//9
    }
    if (testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.combined.antiage_middle_makeup; linksArr = preparedCarts.antiage_combined.links_antiage_middle_makeup;//10
    }
    if (!testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.combined.antiage_big; linksArr = preparedCarts.antiage_combined.links_antiage_big;//11
    }
    if (testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.combined.antiage_big_makeup; linksArr = preparedCarts.antiage_combined.links_antiage_big_makeup;//12
    }
  }
  let combined = testResult[4] && testResult[1] && testResult[3] && testResult[5] && testResult[6];
  if (combined) {
    suitableCart = preparedCarts.combined;
    if (testResult[8] && testResult[9] === "До 6-7 тысяч") {
     productsArr = preparedCarts.combined.small_makeup; linksArr = preparedCarts.combined.links_small_makeup;//7
    }
    if (!testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.combined.small; linksArr = preparedCarts.combined.links_small;//8
    }
    if (!testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.combined.middle; linksArr = preparedCarts.combined.links_middle;//9
    }
    if (testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.combined.middle_makeup; linksArr = preparedCarts.combined.links_middle_makeup;//10
    }
    if (!testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.combined.big; linksArr = preparedCarts.combined.links_big;//11
    }
    if (testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.combined.big_makeup; linksArr = preparedCarts.combined.links_big_makeup;//12
    }
  }
  let antiage_dry = testResult[0] && testResult[1] && testResult[3] && testResult[5] && testResult[6] && testResult[10] === "45+";
  if (antiage_dry) {
    suitableCart = preparedCarts.dry;
    if (!testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.dry.antiage_middle; linksArr = preparedCarts.dry.links_antiage_middle;//13
    }
    if (testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.dry.antiage_small_makeup; linksArr = preparedCarts.dry.links_antiage_small_makeup;//14
    }
    if (!testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.dry.antiage_small; linksArr = preparedCarts.dry.links_antiage_small;//15
    }
    if (testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.dry.antiage_middle_makeup; linksArr = preparedCarts.dry.links_antiage_middle_makeup;//16
    }
    if (!testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.dry.antiage_big; linksArr = preparedCarts.dry.links_antiage_big;//17
    }
    if (testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.dry.antiage_big_makeup; linksArr = preparedCarts.dry.links_antiage_big_makeup;//18
    }
  }
  let dry = testResult[1] && testResult[3] && testResult[5] && testResult[6];
  if (dry) {
    suitableCart = preparedCarts.dry;
    if (!testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.dry.middle; linksArr = preparedCarts.dry.links_middle;
    }
    if (testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.dry.small_makeup; linksArr = preparedCarts.dry.links_small_makeup;
    }
    if (!testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.dry.small; linksArr = preparedCarts.dry.links_small;
    }
    if (testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.dry.middle_makeup; linksArr = preparedCarts.dry.links_middle_makeup;
    }
    if (!testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.dry.big; linksArr = preparedCarts.dry.links_big;
    }
    if (testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.dry.big_makeup; linksArr = preparedCarts.dry.links_big_makeup;
    }
  }
  let antiage_dry_normal_flaccid = testResult[0] && testResult[1] && testResult[3] && testResult[5] && testResult[10] === "45+";
  if (antiage_dry_normal_flaccid) {
    suitableCart = preparedCarts.dry_normal_flaccid
    if (testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.dry_normal_flaccid.small_makeup; linksArr = preparedCarts.dry_normal_flaccid.links_small_makeup;//14//
    }
    if (!testResult[8] && testResult[9] === "До 6-7 тысяч") {
      productsArr = preparedCarts.dry_normal_flaccid.small; linksArr = preparedCarts.dry_normal_flaccid.links_small;//15//
    }
    if (testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.dry_normal_flaccid.middle_makeup; linksArr = preparedCarts.dry_normal_flaccid.links_middle_makeup;//16//
    }
    if (!testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
      productsArr = preparedCarts.dry_normal_flaccid.middle; linksArr = preparedCarts.dry_normal_flaccid.links_middle;//17//
    }
    if (testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.dry_normal_flaccid.big_makeup; linksArr = preparedCarts.dry_normal_flaccid.links_big_makeup;//18//
    }
    if (!testResult[8] && testResult[9] === "Неограниченный бюджет") {
      productsArr = preparedCarts.dry_normal_flaccid.big; linksArr = preparedCarts.dry_normal_flaccid.links_big;//19//
    }
  }
let antiage_combined_flaccid = testResult[0] && testResult[1] && testResult[3] && testResult[4] && testResult[5] && testResult[10] === "45+"; 
if (antiage_combined_flaccid) {
  suitableCart = preparedCarts.combined_flaccid
  if (testResult[8]&& testResult[9] === "Неограниченный бюджет") {
    productsArr = preparedCarts.combined_flaccid.antiage_big_makeup; linksArr = preparedCarts.combined_flaccid.links_antiage_big_makeup//20//
  }
  if (!testResult[8] && testResult[9] === "Неограниченный бюджет") {
    productsArr = preparedCarts.combined_flaccid.big; linksArr = preparedCarts.combined_flaccid.links_antiage_big;//21//
  }
  if (testResult[8]&& testResult[9] === "От 7 до 15 тысяч") {
    productsArr = preparedCarts.combined_flaccid.antiage_middle_makeup; linksArr = preparedCarts.combined_flaccid.links_antiage_middle_makeup;//additional_22//
  }
  if (!testResult[8] && testResult[9] === "От 7 до 15 тысяч") {
    productsArr = preparedCarts.combined_flaccid.antiage_middle;linksArr = preparedCarts.combined_flaccid.links_antiage_middle;//additional_23//
  }
  if (testResult[8]&& testResult[9] === "До 6-7 тысяч") {
    productsArr = preparedCarts.combined_flaccid.antiage_small_makeup; linksArr = preparedCarts.combined_flaccid.links_antiage_small_makeup;//additional_24//
  }
  if (!testResult[8] && testResult[9] === "До 6-7 тысяч") {
    productsArr = preparedCarts.combined_flaccid.antiage_small; linksArr = preparedCarts.combined_flaccid.links_antiage_small;//additional_25//
  }
}
let dry_sensative_rosacea = testResult[2] && testResult[5] && testResult[3];
if (dry_sensative_rosacea) {
  suitableCart = preparedCarts.dry_sensative_rosacea;
  if (testResult[9] === "До 6-7 тысяч" && !testResult[8]) {
    productsArr = preparedCarts.dry_sensative_rosacea.small_makeup; linksArr = preparedCarts.dry_sensative_rosacea.links_small_makeup//23//
  }
  if (testResult[9] === "До 6-7 тысяч" && testResult[8]) {
    productsArr = preparedCarts.dry_sensative_rosacea.small; linksArr = preparedCarts.dry_sensative_rosacea.links_small//additional//
  }
  if (testResult[9] === "От 7 до 15 тысяч" && testResult[8]) {
    productsArr = preparedCarts.dry_sensative_rosacea.middle_makeup; linksArr = preparedCarts.dry_sensative_rosacea.links_middle_makeup;//24//
  }
  if (testResult[9] === "От 7 до 15 тысяч" && !testResult[8]) {
    productsArr = preparedCarts.dry_sensative_rosacea.middle; linksArr = preparedCarts.dry_sensative_rosacea.links_middle//25//
  }
  if (testResult[9] === "Неограниченный бюджет" && testResult[8]) {
    productsArr = preparedCarts.dry_sensative_rosacea.big_makeup; linksArr = preparedCarts.dry_sensative_rosacea.links_big_makeup//26//
  }
  if (testResult[9] === "Неограниченный бюджет" && !testResult[8]) {
    productsArr = preparedCarts.dry_sensative_rosacea.big; linksArr = preparedCarts.dry_sensative_rosacea.links_big//27//
  }
}
let dry_normal_pigmentation = testResult[6] && testResult[5] && testResult[3];
if (dry_normal_pigmentation) {
  suitableCart = preparedCarts.dry_normal_pigmentation;
  if (testResult[9] === "Неограниченный бюджет" && testResult[8]) {
    productsArr = preparedCarts.dry_normal_pigmentation.big_makeup; linksArr = preparedCarts.dry_normal_pigmentation.links_big_makeup//34//
  }
  if (testResult[9] === "Неограниченный бюджет" && !testResult[8]) {
    productsArr = preparedCarts.dry_normal_pigmentation.big; linksArr = preparedCarts.dry_normal_pigmentation.links_big//35//
  }
  if (testResult[9] === "От 7 до 15 тысяч" && testResult[8]) {
    productsArr = preparedCarts.dry_normal_pigmentation.middle_makeup; linksArr = preparedCarts.dry_normal_pigmentation.links_middle_makeup//36//
  }
  if (testResult[9] === "От 7 до 15 тысяч" && !testResult[8]) {
    productsArr = preparedCarts.dry_normal_pigmentation.middle; linksArr = preparedCarts.dry_normal_pigmentation.links_middle//37//
  }
  if (testResult[9] === "До 6-7 тысяч" && testResult[8]) {
    productsArr = preparedCarts.dry_normal_pigmentation.small_makeup; linksArr = preparedCarts.dry_normal_pigmentation.links_small_makeup//38//
  }
  if (testResult[9] === "До 6-7 тысяч" && !testResult[8]) {
    productsArr = preparedCarts.dry_normal_pigmentation.small; linksArr = preparedCarts.dry_normal_pigmentation.links_small//39//
  }
}
let combined_pigmentation = testResult[6] && testResult[4] && testResult[5] && testResult[3];
if (combined_pigmentation) {
  suitableCart = preparedCarts.combined_pigmentation;
  if (testResult[9] === "Неограниченный бюджет" && testResult[8]) {
    productsArr = preparedCarts.combined_pigmentation.big_makeup; linksArr = preparedCarts.combined_pigmentation.links_big_makeup//41//
  }
  if (testResult[9] === "Неограниченный бюджет" && !testResult[8]) {
    productsArr = preparedCarts.combined_pigmentation.big; linksArr = preparedCarts.combined_pigmentation.links_big//42//
  }
  if (testResult[9] === "От 7 до 15 тысяч" && testResult[8]) {
    productsArr = preparedCarts.combined_pigmentation.middle_makeup; linksArr = preparedCarts.combined_pigmentation.links_middle_makeup//43//
  }
  if (testResult[9] === "От 7 до 15 тысяч" && !testResult[8]) {
    productsArr = preparedCarts.combined_pigmentation.middle; linksArr = preparedCarts.combined_pigmentation.links_middle//44//
  }
  if (testResult[9] === "До 6-7 тысяч" && testResult[8]) {
    productsArr = preparedCarts.combined_pigmentation.small_makeup; linksArr = preparedCarts.combined_pigmentation.links_small_makeup//45//
  }
  if (testResult[9] === "До 6-7 тысяч" && !testResult[8]) {
    productsArr = preparedCarts.combined_pigmentation.small; linksArr = preparedCarts.combined_pigmentation.links_small//46//
  }
  let greasyskin = testResult[3] && testResult[4] && testResult[5] && testResult[3];
  if (greasyskin) {
    suitableCart = preparedCarts.greasy;
    if (testResult[9] === "Неограниченный бюджет" && testResult[8]) {
      productsArr = preparedCarts.greasy.big_makeup; linksArr = preparedCarts.greasy.links_big_makeup//41//
    }
    if (testResult[9] === "Неограниченный бюджет" && !testResult[8]) {
      productsArr = preparedCarts.greasy.big; linksArr = preparedCarts.greasy.links_big//42//
    }
    if (testResult[9] === "От 7 до 15 тысяч" && testResult[8]) {
      productsArr = preparedCarts.greasy.middle_makeup; linksArr = preparedCarts.greasy.links_middle_makeup//43//
    }
    if (testResult[9] === "От 7 до 15 тысяч" && !testResult[8]) {
      productsArr = preparedCarts.greasy.middle; linksArr = preparedCarts.greasy.links_middle//44//
    }
    if (testResult[9] === "До 6-7 тысяч" && testResult[8]) {
      productsArr = preparedCarts.greasy.small_makeup; linksArr = preparedCarts.greasy.links_small_makeup;//45//
    }
    if (testResult[9] === "До 6-7 тысяч" && !testResult[8]) {
      productsArr = preparedCarts.greasy.small; linksArr = preparedCarts.greasy.links_small//46//
    }
  }
}
renderResuts(suitableCart);
getProducts(productsArr, linksArr)
}

function renderResuts(cart) {
      if (!cart) {
        cart = preparedCarts.normal;
      }
    let html;
    skinDiscriptionHeader.innerHTML = `Ваш тип кожи <br>${cart.skinDiscriptionHeader}`;
    skinDiscription.textContent = cart.skinDiscription;
    skinTypeInRound.textContent = cart.skinTypeInRound;
    cart.infoDashesInRound.forEach((elem) => {
        html += `<li>${elem}</li>`
    });
    infoDashesInRound.innerHTML = `<ul>${html}</ul>`;
};

function getProducts(arr) {
  let title;
  let imgSrc;
  let price;
  let infoArr = [];
  arr.forEach(link => {
    xhr = new XMLHttpRequest();
    xhr.open('GET', link);
    xhr.responseType = "";
    xhr.send();
    xhr.onload = function() {
      if (xhr.status == 200) {
         try {
              let response = JSON.parse(xhr.response);
              console.log(response);
              title = response.relevants.title;
              imgSrc = JSON.parse(response.product.gallery);
              price = response.relevants.price;
              infoArr.push({title, imgSrc, price})
         } catch(e) {}
      } 
    }
  })
  renderProducts(infoArr)
}
  
function renderProducts(arr, links) {
  if (!arr) {
    arr = preparedCarts.normal.small_makeup;
  }
  if (!links) {
    links = preparedCarts.normal.links_small_makeup;
  }
  let html;
  document.querySelector(".t1025__itemwrapper").textContent= "";
  let n = 0;
  arr.forEach((obj) => {
    obj.link = links[n];
    n++;
  })
  arr.forEach((obj) => {
      html = `<div class="t1025__item t1025__item_in-column t1025__item_fixed-width t-item js-product" data-animate-style="fadeinup" data-animate-chain="yes" data-product-lid="1497456130776">
            <div class="t1025__imgwrapper t1002__picture-wrapper">
              <div class="t1025__bgimg  t-bgimg js-product-img" data-original=${obj.imgSrc} style="background-image:url(${obj.imgSrc});" bgimgfield="li_gallery__1497456130776:::0" id="tuwidget446282"></div>
                <input type="file" class="tu-hidden-input" accept="image/*" style="visibility: hidden; position: absolute; top: 0px; left: 0px; height: 0px; width: 0px;">
              </div>
              <div class="t1025__contentwrapper">
                <div class="t1025__textwrapper">
                  <div class="t1025__title t-name t-name_md js-product-name" data-auto-correct-font-size="rem" field="li_title__1497456130776" style="color:#222222;font-size:18px;font-weight:500;font-family:'Raleway';" data-redactor-nohref="yes">
                    <p style="text-align: left;">${obj.title}</p>                            
                  </div>
                </div>
                <div class="t1025__price-buttons" style="width: 200px;">
                  <div class="t1025__price-wrapper ">
                    <div class="t1025__price t1025__price-item t-name t-name_md" data-auto-correct-font-size="rem" style="color:#222222;font-size:18px;font-weight:400;">
                      <div class="t1025__price-value js-product-price notranslate" translate="off" field="li_price__1497456130776" data-redactor-toolbar="no">${obj.price}</div>
                      <div class="t1025__price-currency">р.</div>
                    </div>
                  </div>
                  <div class="t1025__btn-wrapper ">
                    <div class="t1025__btn-row t1025__btn-first_wrapper ">
                      <a href="#order" class="t1025__btn-item t1025__btn t1025__btn_first t-btn t-btn_xs" style="color:#ffffff;border:1px solid #222222;background-color:#222222;font-family:Raleway;font-weight:500;"><span class="t1025__btn-text">Добавлен в корзину</span></a>
                    </div>
                    <div class="t1025__btn-row t1025__btn-second_wrapper t1002__btns-wrapper">
                    <a href=${obj.link}class="t1025__btn-item t1025__btn t1025__btn_second t-btn t-btn_xs" style="color:#222222;border:1px solid #222222;background-color:#d7d2cc;font-family:Raleway;font-weight:500;"><span class="t1025__btn-text">Подробнее</span></a>
                    </div>
                  </div>
                </div>
              </div>
        </div>`
    document.querySelector(".t1025__itemwrapper").textContent += html;  
  });
}