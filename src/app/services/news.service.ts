import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
  getAllNews() {
    let news = {
      "status": "ok",
      "totalResults": 38,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "Bar & Bench - Indian Legal News"
          },
          "author": "Bar & Bench",
          "title": "Rahul Gandhi defamation case: LIVE UPDATES from Surat Sessions Court on plea for stay of conviction - Bar & Bench - Indian Legal News",
          "description": "Court takes recess break. Hearing to resume again at 3 pm. Tolia: Speaking about his thumping majority etc, this court must note that he contested from two seat",
          "url": "https://www.barandbench.com/news/litigation/rahul-gandhi-defamation-case-live-updates-from-surat-sessions-court-on-plea-for-stay-of-conviction",
          "urlToImage": "https://gumlet.assettype.com/barandbench%2F2023-04%2Fa4d0fc1d-f71a-4a02-baca-2f1ed7b413d1%2F07.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
          "publishedAt": "2023-04-13T08:29:07Z",
          "content": "A Sessions Court in Surat is hearing an appeal by Congress leader Rahul Gandhi challenging his conviction by a magistrate court in a criminal defamation case for his \"all thieves have Modi surname\" r… [+1399 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "Surbhi Kapila",
          "title": "Covid-19 or influenza: dilemma of the day - Hindustan Times",
          "description": "As H3N2 and Covid-19 present similar symptoms, one can be misconceived as the other; experts help differentiate. | Health",
          "url": "https://www.hindustantimes.com/lifestyle/health/is-it-covid-19-or-h3n2-experts-explain-key-differences-symptoms-influenza-leading-to-more-hospitalisations-wholesome-diet-yoga-can-help-101681372582549.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/13/1600x900/H3N2-and-Covid-19-both-may-present-flu-like-sympto_1681373113177.jpg",
          "publishedAt": "2023-04-13T07:56:21Z",
          "content": "Fever, fatigue and persistent cough are among the many symptoms being witnessed in people across the country in the recent past. But, the question is is it Covid-19 or H3N2 virus that one is down wit… [+3508 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Exclusive: UP Man Wants Crane Freed - \"How Can Anyone Be Fine In A Cage?\" - NDTV",
          "description": "Arif Khan Gurjar, whose friendship with a Sarus crane has melted hearts, wants the bird to get back its freedom once its quarantine at a Uttar Pradesh zoo ends.",
          "url": "https://www.ndtv.com/india-news/arif-khan-gurjar-sarus-crane-exclusive-up-man-wants-crane-freed-how-can-anyone-be-fine-in-a-cage-3944470",
          "urlToImage": "https://c.ndtvimg.com/2023-03/4jdc0ct_sarus-crane-up_625x300_28_March_23.jpg",
          "publishedAt": "2023-04-13T07:45:44Z",
          "content": "Arif said that he found the bird injured in a field a year back and nursed it back to health\r\nArif Khan Gurjar, whose friendship with a Sarus crane has melted hearts, wants the bird to get back its f… [+3439 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT News Desk",
          "title": "Atiq Ahmad's son Asad, wanted in Umesh Pal murder case, killed in encounter - Hindustan Times",
          "description": "Gangster-turned-politician Atiq Ahmad's son Asad, who is wanted in the killing of lawyer Umesh Pal, has been killed in an encounter by the UP STF in Jhansi.",
          "url": "https://www.hindustantimes.com/cities/lucknow-news/atiq-ahmad-s-son-asad-wanted-in-umesh-pal-case-killed-in-encounter-101681371436932.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/13/1600x900/asad_1681375871321_1681375871668_1681375871668.jpg",
          "publishedAt": "2023-04-13T07:39:17Z",
          "content": "Gangster-turned-politician Atiq Ahmad's son Asad, who is wanted in the killing of lawyer Umesh Pal, has been killed in an encounter by the Uttar Pradesh Police's Special Task Force (STF) in Jhansi.\r\n… [+1288 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBCTV18"
          },
          "author": "Reema Tendulkar",
          "title": "Infosys Q4 Preview: Constant currency growth likely to trail TCS this quarter - CNBCTV18",
          "description": "Infosys is likely to guide for 6-8 percent growth, compared to the 16-16.5 percent seen in the previous financial year.",
          "url": "https://www.cnbctv18.com/earnings/infosys-q4-preview-fy24-guidance-growth-may-trail-tcs-margin-exits-management-16382941.htm",
          "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/04/Infosys-Earnings-Expectations-2-1019x573.png",
          "publishedAt": "2023-04-13T07:37:00Z",
          "content": "MiniInfosys is likely to guide for 6-8 percent growth, compared to the 16-16.5 percent seen in the previous financial year."
        },
        {
          "source": {
            "id": null,
            "name": "AZoCleantech"
          },
          "author": null,
          "title": "Pulling Energy Out of Thin Air: Hydrogen-Based Clean Energy - AZoCleantech",
          "description": "Finding ways to produce clean energy and sources that generate green electricity tend to be complex, long-winded, and generally not as easy as simply pulling energy out of thin air. Yet, a group of researchers in Australia has demonstrated just that after dis…",
          "url": "https://www.azocleantech.com/news.aspx?newsID=33264",
          "urlToImage": "https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_33264_16813708189423484.jpg",
          "publishedAt": "2023-04-13T07:31:00Z",
          "content": "Finding ways to produce clean energy and sources that generate green electricity tend to be complex, long-winded, and generally not as easy as simply pulling energy out of thin air. Yet, a group of r… [+4911 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Eurasiantimes.com"
          },
          "author": "Sakshi Tiwari",
          "title": "British SAS, UK’s Elite Special Air Service Forces Could Be Operating Inside Ukraine To Battle Russia – Leaked US Intel - EurAsian Times",
          "description": "Among a host of information about the Ukraine war made available by the controversial leak of Pentagon documents, there is a revelation that British special troops have been stationed in Ukraine. The leaked files have revealed that up to 50 Special Forces, mo…",
          "url": "https://eurasiantimes.com/british-sas-uks-famed-special-air-service-forces-could-be/",
          "urlToImage": "https://eurasiantimes.com/wp-content/uploads/2023/04/SAS-Task-Force-1.jpg",
          "publishedAt": "2023-04-13T07:14:56Z",
          "content": "Among a host of information about the Ukraine war made available by the controversial leak of Pentagon documents, there is a revelation that British special troops have been stationed in Ukraine.\r\nTh… [+5583 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "The Indian Express",
          "title": "ED lodges FEMA case against BBC India for ‘foreign exchange violation’, questions employees - The Indian Express",
          "description": null,
          "url": "https://indianexpress.com/article/india/ed-bbc-fema-case-irregularities-8553968/",
          "urlToImage": null,
          "publishedAt": "2023-04-13T07:10:23Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "CNBCTV18"
          },
          "author": "https://www.cnbctv18.com",
          "title": "WHO issues advisory after China reports first human death from H3N8 bird flu, check details here - CNBCTV18",
          "description": "The H3N8 bird flu virus can spread to humans through exposure to live or dead poultry or due to contact with contaminated surfaces. So far only 3 cases of human infection have been reported in China.",
          "url": "https://www.cnbctv18.com/healthcare/who-issues-advisory-after-china-reports-first-human-death-from-h3n8-bird-flu-check-details-here-16396151.htm",
          "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/01/shutterstock_1625951251.jpg",
          "publishedAt": "2023-04-13T06:58:14Z",
          "content": "The first human death from H3N8 bird flu has been reported in China, the World Health Organization (WHO) said on Tuesday. The deceased, a 56-year-old woman from China's Guangdong province, was only t… [+2445 chars]"
        },
        {
          "source": {
            "id": "the-hindu",
            "name": "The Hindu"
          },
          "author": "The Hindu",
          "title": "Europe’s JUICE mission to launch for Jupiter’s icy moons - The Hindu",
          "description": null,
          "url": "https://www.thehindu.com/sci-tech/science/europes-juice-mission-to-launch-for-jupiters-icy-moons/article66732175.ece",
          "urlToImage": null,
          "publishedAt": "2023-04-13T06:48:00Z",
          "content": null
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": "ESPNcricinfo staff",
          "title": "R Ashwin: 'Some umpiring decisions in this year's IPL have left me a little flummoxed' - ESPNcricinfo",
          "description": "Royals bowler wonders why the ball was replaced during CSK's innings of the \"umpire's accord\", and calls for decisions to be \"standard\" through the tournament",
          "url": "https://www.espncricinfo.com/story/csk-vs-rr-ipl-2023-r-ashwin-criticises-umpiring-decisions-in-ipl-have-left-me-flummoxed-1368452",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/338500/338513.6.jpg",
          "publishedAt": "2023-04-13T06:15:00Z",
          "content": "NewsRoyals bowler wonders why the ball was replaced during CSK's innings of the \"umpire's accord\", and calls for decisions to be \"standard\" through the tournament"
        },
        {
          "source": {
            "id": null,
            "name": "Livemint"
          },
          "author": "Livemint",
          "title": "Apple and Truecaller launch Live Caller ID Feature for these iPhone users. Details here | Mint - Mint",
          "description": "Some iPhone users now have the convenience of activating Truecaller to search for details of unknown callers through voice commands.",
          "url": "https://www.livemint.com/technology/apps/apple-and-truecaller-launch-live-caller-id-feature-for-these-iphone-users-details-here-11681365663269.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2023/04/13/600x338/2-0-142683188-iphone-multitasking-0_1681188994242_1681366145816_1681366145816.JPG",
          "publishedAt": "2023-04-13T06:10:41Z",
          "content": "Truecaller has introduced a new Live Caller ID feature for iPhone users that streamlines the process of finding caller details. By incorporating Apple's virtual assistant, the platform allows users t… [+2497 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Livemint"
          },
          "author": "Livemint",
          "title": "Covid spike: India logs 10,158 new corona cases, 30% more than yesterday | Mint - Mint",
          "description": "Delhi and Mumbai saw over 1000 cases in a day as the country sees over 10,000 cases reported. The daily positivity rate was recorded at 4.42 per cent while the weekly positivity rate was 4.02 per cent. The active cases now constitute 0.10 per cent of the tota…",
          "url": "https://www.livemint.com/news/india/covid-spike-india-logs-10-158-new-corona-cases-30-more-than-yesterday-11681357927294.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2023/04/13/600x338/India_covid_spike_1681358350649_1681358350842_1681358350842.jpg",
          "publishedAt": "2023-04-13T05:58:07Z",
          "content": "India recorded a sharp hike in daily Covid-19 cases at 10,158 compared to the previous day on Thursday. According to the health ministry data, the active infections stand at 44,998. This comes as the… [+2500 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Onmanorama.com"
          },
          "author": "Onmanorama Staff",
          "title": "HC upholds murder charges against Sriram Venkitaraman in scribe's death - Onmanorama",
          "description": "Court accepted govt's revision petition in the case.",
          "url": "https://www.onmanorama.com/news/kerala/2023/04/13/journalist-basheer-death-sriram-venkitaraman-faces-setback-kerala-high-court-order.html",
          "urlToImage": "https://img.onmanorama.com/content/dam/mm/en/kerala/top-news/images/2022/8/3/sriram-basheer.jpg",
          "publishedAt": "2023-04-13T05:43:18Z",
          "content": "Kochi: The Kerala High Court on Thursday pronounced that the culpable homicide charges against IAS officer Sriram Venkitaraman in the death of journalist KM Basheer in 2019 will stand. The journalist… [+1014 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "BCCI slaps ₹12 lakh fine on RR captain Sanju Samson for Code of Conduct breach - Hindustan Times",
          "description": "The fine would mean nothing but a word of caution for Samson as the joy and satisfaction of beating CSK at home for the first time since 2008 was far greater. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/bcci-slaps-rs-12-lakh-fine-on-rr-captain-sanju-samson-for-ipl-code-of-conduct-breach-in-csk-match-101681364039426.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/13/1600x900/samson_CSK_1681364148672_1681364161511_1681364161511.JPG",
          "publishedAt": "2023-04-13T05:41:35Z",
          "content": "Sanju Samson, the Rajasthan Royals captain, was fined 12 lakh after his side maintained a slow over rate in an IPL 2023 match against Chennai Super Kings on Wednesday. \"Rajasthan Royals have been fin… [+1817 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TIMESOFINDIA.COM",
          "title": "MS Dhoni nursing a knee injury, Sisanda Magala out for two weeks: CSK coach Stephen Fleming - Indiatimes.com",
          "description": "Cricket News: Chennai Super Kings head coach Stephen Fleming said captain Mahendra Singh Dhoni is nursing a knee injury. Fleming's comments came after after the fou",
          "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ms-dhoni-nursing-a-knee-injury-sisanda-magala-out-for-two-weeks-csk-coach-stephen-fleming/articleshow/99454141.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-99454132,width-1070,height-580,imgsize-61940,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-04-13T05:40:00Z",
          "content": "CSK vs RR IPL 2023: Rajasthan Royals survive late MS Dhoni blitzMS Dhoni has done it a million times over the last 15 years. He brought it down again to five off one ball with a flurry of sixes again… [+161 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "etimes.in",
          "title": "Salman Khan had a rule on the set against girls wearing low necklines or revealing clothes, says Palak Ti - Indiatimes.com",
          "description": "Palak Tiwari will be making her Bollywood debut with Salman Khan starrer 'Kisi Ka Bhai Kisi Ki Jaan' but even befor",
          "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/salman-khan-had-a-rule-on-the-set-against-girls-wearing-low-necklines-or-revealing-clothes-says-palak-tiwari-heres-why/articleshow/99453795.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-99453819,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-44982/99453819.jpg",
          "publishedAt": "2023-04-13T05:25:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Jr NTR's \"Evening Well Spent\" With Amazon Studios' James Farrell And SS Rajamouli - NDTV Movies",
          "description": "Sharing the pictures, Jr NTR wrote, \"An evening well spent with friends and well-wishers\"",
          "url": "https://www.ndtv.com/entertainment/inside-jr-ntr-s-amazing-evening-with-amazon-studios-james-farrell-and-ss-rajamouli-3943959",
          "urlToImage": "https://c.ndtvimg.com/2023-04/4rbfgm7o_jr-ntr-_625x300_13_April_23.jpg",
          "publishedAt": "2023-04-13T05:07:48Z",
          "content": "James Farrell with Jr NTR. (courtesy: jrntr)\r\nNew Delhi: For all Jr NTR fans out there, we have a new post alert waiting for you. The actor has shared a series of pictures from an evening well spent … [+1729 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "Ravi Krishnan Khajuria",
          "title": "Indian Army shoots down Pak drone along LoC; AK magazines, cash recovered - Hindustan Times",
          "description": "During the intervening night of March 31 and April 1, Border Security Force (BSF) had also shot down a Pakistani drone along the international border in the Ramgarh sector of Samba",
          "url": "https://www.hindustantimes.com/cities/chandigarh-news/indian-army-shoots-down-pakistani-drone-recovers-ak-magazines-ammunition-and-cash-along-loc-in-j-k-s-rajouri-district-101681361477610.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/13/1600x900/Five-loaded-AK-magazines--131-rounds-of-AK-47--and_1681366872634.jpg",
          "publishedAt": "2023-04-13T04:51:17Z",
          "content": "The Indian Army on Thursday shot down a Pakistani drone and recovered five loaded AK magazines, 131 rounds of AK 47, and 2 lakh cash (Indian currency) along the Line of Control (LoC) in Jammu and Kas… [+1684 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India TV News"
          },
          "author": "Edited by Saumya Nigam",
          "title": "Acer launches Predator Helios 16 gaming laptop at Rs 1,99,990 - India TV News",
          "description": "The new laptop comes equipped with advanced cooling technology, including custom-designed 5th Gen AeroBlade 3D Fans, vector heat pipes, and liquid metal thermal grease that works together to provide optimal cooling performance for its influential 13th Gen Int…",
          "url": "https://www.indiatvnews.com/technology/news/acer-launches-predator-helios-16-gaming-laptop-at-rs-1-99-990-2023-04-13-863067",
          "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/04/acer-predator-helios-16-gaming-laptop-2-1681360604.jpg",
          "publishedAt": "2023-04-13T04:39:37Z",
          "content": "Acer, a Taiwanese electronics company, has launched a new gaming laptop named 'Predator Helios 16', powered by a 13th Gen Intel Core i9 processor and NVIDIA GeForce RTX 4080 Series GPU. The laptop is… [+1597 chars]"
        }
      ]
    }
    return news
  }
  getAllCountries(countryname:any) {
    let country =`https://restcountries.com/v3.1/all?fields=${countryname},flags` 
    return fetch(country)
  }
  exchangeRates() {
    return fetch(`https://v6.exchangerate-api.com/v6/d27a2f7f09b3505847afeaa4/latest/USD`)
  }
  weatherDetail(cityName:string) {
    let url=`https://api.openweathermap.org/data/2.5/weather?appid=8f9164d0bb1a347b51a7d0e25e247b6c&q=${cityName}&units=metric`
    return fetch(url)

  }
}