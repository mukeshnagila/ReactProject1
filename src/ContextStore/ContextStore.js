import React, { createContext, useState } from "react";
// import Bollywood from "../Components/Navbar/Headers/Bollywood";
// import Hollywood from "../Components/Navbar/Headers/Hollywood";
// import Food from "../Components/Navbar/Headers/Food";

export const store = createContext();

const ContextStore = (props) => {
    const [data, setData] = useState([

       // Bollywood data...................

            {
                id: 1,
                image: "https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Jawan-short-movie-review.png?impolicy=Medium_Widthonly&w=1280&h=900",
                name: "Jawan quick movie review: Shah Rukh Khan film filled with DHAMAKEDAAR scenes",
                description: "Jawan, the much-awaited film of the year, starring Shah Rukh Khan and Nayanthara is finally out in theatres. The film has released to packed houses with the early morning shows at 6 seeing major footfalls. The Janmashtami holiday seems to be helping the film gain momentum right from the first show. Some reviews have been out already from enthusiastic fans and they are going gaga over the film.",
                category: "Bollywood",
                date: "07/09/2023"
            },
            {
                id: 2,
                image: "https://filmfare.wwmindia.com/content/2023/sep/missionraniganj51694153246.jpg",
                name: "Mission Raniganj teaser sees Akshay Kumar adamant to rescue the trapped coal miners: Watch",
                description: "Mission Raniganj, directed by Tinu Suresh Desai is inspired by the courageous actions of Late Shri Jaswant Singh Gill, who led a coal mine rescue mission at Raniganj Coalfield. Gill, a resident of Amritsar, received numerous awards for his bravery. The movie is based on a real-life incident and Gill's heroic act. Unfortunately, he passed away in 2019 at the age of 80.",
                category: "Bollywood",
                date: "07/09/2023"
            },
            {
                id: 3,
                image: "https://filmfare.wwmindia.com/content/2023/sep/rockyaurrani41694070772.jpg",
                name: "Watch: Karan Johar releases unseen footage from Rocky Aur Rani Kii Prem Kahaani",
                description: "Rocky Aur Rani Kii Prem Kahaani, directed by Karan Johar, has seen exceptional success in India and has become a smash hit internationally. The heartbreaking unrequited love story of Dharmendra and Shabana Azmi's characters has moved viewers, and the lead actors Ranveer Singh and Alia Bhatt have won a lot of praise for their on-screen chemistry..",
                category: "Bollywood",
                date: "07/09/2023"
            },
            // {
            //     id: 4,
            //     image: "https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Jawan-short-movie-review.png?impolicy=Medium_Widthonly&w=1280&h=900",
            //     name: "Jawan quick movie review: Shah Rukh Khan film filled with DHAMAKEDAAR scenes",
            //     description: "Jawan, the much-awaited film of the year, starring Shah Rukh Khan and Nayanthara is finally out in theatres. The film has released to packed houses with the early morning shows at 6 seeing major footfalls. The Janmashtami holiday seems to be helping the film gain momentum right from the first show. Some reviews have been out already from enthusiastic fans and they are going gaga over the film. BollywoodLife too is watching Jawan on the first day, first show and it's the interval now. So how is Jawan, directed by Atlee, so far? Read the BL Jawan Movie Review now.",
            //     category: "Bollywood",
            //     date: "07/09/2023"
            // },
            {
                id: 5,
                image: "https://filmfare.wwmindia.com/content/2021/feb/kareenakapoorkhan41613813444.jpg",
                name: "Kareena Kapoor Khan shares a picture of her scrumptious meal from the day",
                description: "Any day now, Kareena Kapoor Khan will welcome her second baby with Saif Ali Khan. The actress announced her pregnancy in August 2020 and has since kept his followers updated with what she’s up to. From shooting for ad campaigns to hanging out with family, Kareena managed to balance work and personal life even in this phase..",
                category: "Bollywood",
                date: "07/09/2023"
            },
            {
                id: 6,
                image: "https://images.indianexpress.com/2023/01/shah-rukh-khan-brand-pathaan.jpg",
                name: "Exclusive Interview with Bollywood Superstar: Deep Dive into the Upcoming Blockbuster",
                description: "In an exclusive interview, we sat down with the Bollywood superstar to discuss the much-anticipated blockbuster set to release next month. The actor shared insights about the film's challenges, his character, and working with a star-studded cast. Get ready for a behind-the-scenes look!",
                category: "Bollywood",
                date: "08/15/2023"
            },
                {
                  id: 7,
                  image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/05/t-series-and-luv-films-tu-jhoothi-main-makkaar-dominates-top-50-spotify-india-list-with-three-chart-topping-songs.jpg",
                  name: "Tu Jhoothi Main Makkaar: Ranbir Kapoor Starrer Movie Songs Dominates Top 50 Spotify India List",
                  description: "T-Series and Luv Films’ blockbuster film, Tu Jhoothi Main Makkaar, continues its remarkable journey of success, captivating audiences in India and around the globe. Adding to the film’s phenomenal reception, the soundtrack of the film became an instant sensation resonating with music lovers since the release of its first song, “Tere Pyaar Mein”, the second soundtrack, “Pyaar Hota Kayi Baar Hai,” garnered tremendous attention too given its relatable lyrics and is still trending extensively on social media with netzines making creative reels.",
                  category: "Bollywood",
                  date: "09/09/2023"
                },
                {
                  id: 8,
                  image: "https://www.filmfare.com/media/content/2023/sep/akshaykumar31694086976.jpg",
                  name: "Akshay Kumar drops the motion poster of Mission Raniganj, replaces India with Bharat",
                  description: "The upcoming movie starring Akshay Kumar has an intriguing /Bhara/ connection. On Wednesday, the actor released the motion poster for Mission Raniganj, but the internet quickly discovered a few changed references to /Bharat/ in his Instagram post.",
                  category: "Bollywood",
                  date: "09/09/2023"
                },
                {
                  id: 9,
                  image: "https://filmfare.wwmindia.com/content/2023/sep/ashabhoslelove21694160033.jpg",
                  name: "Birthday Special: 10 Asha Bhosle Songs to feel the magic of love",
                  description: "Asha Bhosle, is a name that needs no introduction. She is a name that is backed by a legacy of musical talent. With her talent and voice, Ashaji has come to be associated with classic popular songs from the past. Her music has endured the test of time as she has brilliantly mastered every genre, from pop numbers to ghazals. She has been promoting a level of linguistic and musical diversity with her music that was unequalled since the 1940s..",
                  category: "Bollywood",
                  date: "08/09/2023"
                },
                {
                  id: 10,
                  image: "https://filmfare.wwmindia.com/content/2023/sep/sunnydeolgadar241694172596.jpg",
                  name: "Sunny Deol overwhelmed by the audience response to Gadar 2: I'm Not Sure Whether I Deserve It or No",
                  description: "Recently, during a broadcast news show, Sunny Deol was seen shedding tears of gratitude at the sight of the standing ovation from his fans. Upon being asked by the host about the tears in his eyes, Sunny once again became emotional with positive feelings, and the audience continued to show their support by applauding him.",
                  category: "Bollywood",
                  date: "10/10/2023"
                },
                {
                  id: 11,
                  image: "https://filmfare.wwmindia.com/content/2023/sep/madhuridixitshahrukhkhanjawan41694170337.jpg",
                  name: "Madhuri Dixit says she 'cannot wait’ to watch Shah Rukh Khan's Jawan",
                  description: "Madhuri Dixit shared on her Instagram stories that she 'cannot wait' to watch the movie. Madhuri took to Instagram stories and shared the trailer of Jawan. She wrote, Getting ready to be mesmerised by your amazing performance yet again @iamsrk Can't wait to watch it in the theatre",
                  category: "Bollywood",
                  date: "10/08/2023"
                },
                {
                  id: 12,
                  image: "https://filmfare.wwmindia.com/content/2023/sep/zeenataman41694170533.jpg",
                  name: "Zeenat Aman recalls a sweet gesture by Norway’s Postal Department from when she visited Oslo",
                  description: "Zeenat Aman is well-known for her roles in a number of highly praised films, including Hare Rama Hare Krishna, Yaadon Ki Baraat, Don, Satyam Shivam Sundaram, and others. Fans have been eagerly anticipating the 71-year-old actress' musings on various subjects ever since she made her Instagram debut a few months ago. Zeenat Aman has been honest about many areas of her job, but in her most recent post, she shared a touching surprise she received during a trip to Oslo in 2016.",
                  category: "Bollywood",
                  date: "10/08/2023"
                },
                {
                  id: 13,
                  image: "https://filmfare.wwmindia.com/content/2023/sep/raghavchadhaparineetichopra11694160731.jpg",
                  name: "Raghav Chadha describes his first meeting with Parineeti Chopra as being magical",
                  description: "In a recent YouTube interview, Raghav Chadha opened up about his first meeting with Parineeti. Describing the occassion, he said, Hum jaise bhi mile, it was very magical and a very organic way of meeting. It is something that I thank god every day for, for giving me Parineeti in my life... Bahut badi blessing hai and I am extremely happy that I have her as my partner. As I said, I thank god every single day for giving her to me.",
                  category: "Bollywood",
                  date: "10/08/2023"
                },
                {
                  id: 14,
                  image: "https://filmfare.wwmindia.com/content/2023/sep/amitabhbachchan41694160452.jpg",
                  name: "Watch: BTS video of Amitabh Bachchan and Shah Rukh Khan from their shoot surfaces on the internet",
                  description: "After a gap of 17 years, Amitabh Bachchan and Shah Rukh Khan have reunited for a project. The Dons of Bollywood can be seen sprinting towards something in a video that surfaced after a snapshot of Big B and SRK drove the Internet into a frenzy.",
                  category: "Bollywood",
                  date: "10/08/2023"
                },

                //Top Bollywood data...................

                {
                  id: 15,
                  image: "https://www.hindustantimes.com/ht-img/img/2023/09/11/550x309/Jawan_box_office_collection_1694422014923_1694422015151.jpeg",
                  name: "Jawan box office collection day 4: Shah Rukh Khan film earns ₹81 crore on Sunday, takes weekend total to 287 crore",
                  description: "Jawan box office collection: The Atlee action entertainer starring Shah Rukh Khan and Nayanthara achieved the unthinkable on Sunday. The film collected around ₹81 crore nett in India for all languages on Sunday as per early estimates reported by Sacnilk.com. The gross collection as reported by film trade analyst Manobala Vijayabalan stands at ₹85.10 crore.",
                  category: "TopBollywoodMain",
                  date: "11/08/2023"
                },

                //small Top Bollywood data...................

                {
                  id: 16,
                  image: "https://www.hindustantimes.com/ht-img/img/2023/09/10/550x309/_a246f00e-90ec-11e9-9207-029e3937e15a_1694330102718.jpg",
                  name: "Sunny Deol opens up on ‘childish’ fight with Shah Rukh Khan on sets of Darr. Here's what he said",
                  description: "This is not the first time Sunny has opened up on the incident from Darr sets. In a 2016 interview with the same news channel, Sunny had said that he had quite a few arguments about the rationality of the scene in which Shah Rukh Khan stabs him..",
                  category: "TopBollywoodSmall",
                  date: "11/08/2023"
                },
                {
                  id: 17,
                  image: "https://c.ndtvimg.com/2023-09/g487tglg_alia-_625x300_11_September_23.jpg",
                  name: "Pooja Bhatt On That Viral Kiss With Dad Mahesh Bhatt: --It Was Absolutely Innocent",
                  description: "Actress Pooja Bhatt, who was last seen as a contestant in Bigg Boss OTT season 2, in a recent interview with Siddharth Kannan, spoke at length about the unwarranted attention that was given to the magazine cover in 1990 where she was seen kissing her dad Mahesh Bhatt on the lips. Elaborating on the issues, the Bombay Begums star asserted that the moment that was captured was --absolutely innocent--. On being asked if she regrets the photo shoot, Pooja Bhatt was quick to reply, --No, because I see it very simple, and I think that unfortunately jo hota hai (what happens is), a frozen moment can be represented and misrepresented in anyway. Aur mujhe yaad hai Shah Rukh ne mujhe yeh kaha tha when you have daughters, jab hi aapke bacche chote hai (I remember Shah Rukh had told me that when you have daughters and when your child is small), how often a child just says, ‘Mummy papa give me a kiss'. And they go this way..",
                  category: "TopBollywoodSmall",
                  date: "11/08/2023"
                },
                {
                  id: 18,
                  image: "https://c.ndtvimg.com/2023-09/ramb6u58_alia-_625x300_11_September_23.jpg",
                  name: "Madhuri And Husband Nene At Beyonce's Concert:",
                  description: "Madhuri Dixit and her husband Dr Shriram Nene, currently on vacation, witnessed the --magic-- of singer Beyonce at her concert and they could not be any happier. The Aaja Nachle star recently attended singer Beyonce's concert which is a part of her Renaissance tour with her husband and friend. The actress also shared pictures and videos of herself from the concert on Sunday. The actress dropped a selfie with her husband followed by a glimpse of singer Beyonce from the concert...",
                  category: "TopBollywoodSmall",
                  date: "11/08/2023"
                },
                {
                  id: 19,
                  image: "https://c.ndtvimg.com/2023-09/gk8dd6tg_priyanka-_625x300_10_September_23.jpg",
                  name: "Sobhita Dhulipala Expresses Her Wish To Audition For Don 3: ---I Would Be Thrilled",
                  description: "Be it her latest series Made in Heaven or the Ponniyin Selvan films, actor Sobhita Dhulipala says she has always tried to make the best of the opportunities that came her way. Dhulipala, who made her film debut with Anurag Kashyap's Raman Raghav 2.0 in 2016, recently reprised her breakout role of the wedding planner Tara in the second season of the Prime Video series Made in Heaven...",
                  category: "TopBollywoodSmall",
                  date: "11/08/2023"
                },      
                
                ////South_Gossip data
                {
                  id: 20,
                  image: "https://st1.bollywoodlife.com/wp-content/uploads/2023/09/srkkka-11.png?impolicy=Medium_Widthonly&w=303",
                  name: "Prabhas to play Lord Shiva in Kannappa; Kriti Sanon’s sister Nupur Sanon bags the leading role",
                  description: "Prabhas is unstoppable, and he is on a signing spree. The latest update about the pan-India star is that he has signed his next film with Manchu Vishnu and has Nupur Sanon as his leading lady in Kannappa. Prabhas is all set to begin shooting for Kannappa, and after romancing Kriti Sanon in Adipurush, the Saalar star will be sharing the screen with the National Award winner's sister, Nupur Sanon. Prabhas fans are extremely elated with his latest news and have been trending his name on Twitter and are hailing him as the king. Manchu Vishnu's dream project Kannappa has only gotten bigger with Prabhas' entry as Lord Shiva, and the star will reportedly have 15–30 minutes of screen time in the film..",
                  category: "South_Gossip",
                  date: "12/08/2023"
                }, 
                {
                  id: 21,
                  image: "https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Pushpa-2-release-date.png?impolicy=Medium_Widthonly&w=1280&h=900",
                  name: "Pushpa 2 release date: Allu Arjun, Rashmika Mandanna starrer locks Independence Day 2024, check new poster",
                  description: "Allu Arjun, Rashmika Mandanna are both gearing up for Pushpa 2 now. It is one of the most anticipated new movies of 2024. The film is high on buzz with fans demanding an update about Pushpa 2 every day possible. And finally, the day has arrived. You read that right, the makers of Allu Arjun starrer have treated the National award-winning actor's fans to a big update. They have announced the release date of Pushpa 2. Fans have been eagerly awaiting Pushpa 2 release date and it is finally here. Allu Arjun's Pushpa will meet you on Independence Day next year...",
                  category: "South_Gossip",
                  date: "12/08/2023"
                }, 
                {
                  id: 22,
                  image: "https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-10T002239.674.jpg?impolicy=Medium_Widthonly&w=303",
                  name: "Salaar: Prabhas, Prashanth Neel film postponement's REAL reason revealed?",
                  description: "Salaar is the movie people were looking forward to in September 2023 after Jawan. Prabhas is one pan-India star who is loved all over the country. But the makers said that Salaar has been postponed. The reason being given was that production work is not over on the film. Salaar made by Prashanth Neel is bankrolled by Hombale Films. The movie is rumoured to be a part of the KGF Universe as per some social media handles. Many felt that Jawan was the reason the makers decided to push the film ahead. Shah Rukh Khan's film has got a hysterical response from the masses and classes. If the collections happen at this rate, it will soon cross Pathaan..",
                  category: "South_Gossip",
                  date: "12/08/2023"
                }, 
                {
                  id: 23,
                  image: "https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-08T002117.189.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
                  name: "Leo: Thalapathy Vijay starrer gets fabulous response from UK box office 40 days ahead of release",
                  description: "Leo starring Thalapathy Vijay, Trisha and Sanjay Dutt is coming on October 19. The movie is almost the films of 2023 that has immense buzz on social media. In fact, Jawan, Salaar and Leo are three movies that are discussed the most on social media. Tamil superstar Thalapathy Vijay has a huge fan following overseas. We know that film chains open bookings in advance for top South stars, and it has done the same for Thalapathy Vijay's Leo in the UK. The advance bookings are happening, and the demand 40 days prior to release is mind-boggling...",
                  category: "South_Gossip",
                  date: "12/08/2023"
                },
                
                

                //////////////////////////////////// Tecnology Deta Start From Here //////////////////////////////////////////////////////


                  {
                    id: 24,
                    image: "https://cdn.vox-cdn.com/thumbor/k5WxoQHX_4-tR-7JHqyggFYgN_s=/0x0:6720x4480/920x613/filters:focal(1889x2216:2963x3290):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72634066/GettyImages_1281329479.0.jpg",
                    name: "What you need to know about Google’s existential threat",
                    description: "The first big trial of the modern Big Tech antitrust movement is here: On September 12, the Department of Justice’s lawsuit against Google’s search engine monopoly begins. What’s at stake? Oh, nothing much — just the future of the internet. Or maybe the future of antitrust law in the US. Maybe both.",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 25,
                    image: "https://cdn.vox-cdn.com/thumbor/k7yDGkQC_YQpmecHHGlm_7O2J8I=/0x0:7467x5568/920x613/filters:focal(3169x1628:4363x2822):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72397352/GettyImages_1258928014.0.jpg",
                    name: "Why in the world are Elon and Zuck planning to punch each other?",
                    description: "By “boys,” of course, we mean tech billionaires Elon Musk, who owns Tesla, SpaceX, and most recently Twitter, as well as Mark Zuckerberg, who founded Meta (formerly Facebook), which also owns Instagram and WhatsApp. They are 51 and 39 years old, respectively — and back in June, we regretfully informed you that they were gearing up for a cage fight at an unconfirmed location (but possibly in Las Vegas?) on a to-be-decided date. Elon Musk signaled his interest in the match on Twitter; Zuckerberg, naturally, confirmed that he was in through Instagram.",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 26,
                    image: "https://cdn.vox-cdn.com/thumbor/xCo1n5UPaMFmKUvFCMX042SSGJw=/0x0:8660x5773/920x613/filters:focal(3874x2137:5258x3521):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72443129/GettyImages_1255072252.0.jpg",
                    name: "The FTC’s case against Microsoft’s Activision acquisition is not going well",
                    description: "Microsoft’s $69 billion merger with Activision Blizzard seems all but inevitable now: Sony is finally playing along. Microsoft’s main rival and opposition to the acquisition just signed a deal to keep Activision’s Call of Duty on its PlayStation consoles pending the merger’s completion. The deal is a significant sign that Sony believes the acquisition will happen.",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 27,
                    image: "https://cdn.vox-cdn.com/thumbor/fo43LqLpuuBmr56WLUFn6jedfm0=/0x0:5913x3588/920x613/filters:focal(2484x1321:3430x2267):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71822251/GettyImages_1245566064.0.jpg",
                    name: "Think AI was impressive last year? Wait until you see what’s coming.",
                    description: "Kelsey Piper is a senior writer at Future Perfect, Vox’s effective altruism-inspired section on the world’s biggest challenges. She explores wide-ranging topics like climate change, artificial intelligence, vaccine development, and factory farms, and also writes the Future Perfect newsletter.",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 28,
                    image: "https://cdn.vox-cdn.com/thumbor/O1s5DGhfOuT28y7EywnagKhaRys=/0x0:5000x3332/920x613/filters:focal(2100x1266:2900x2066):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71389103/1243263843.0.jpg",
                    name: "Two Republican judges just let Texas seize control of Twitter and Facebook",
                    description: "An especially right-wing panel of the already conservative United States Court of Appeals for the Fifth Circuit handed down an astonishing opinion on Friday, effectively holding that the state of Texas may seize control of content moderation at major social media platforms such as Twitter, Facebook, and YouTube.",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 29,
                    image: "https://cdn.vox-cdn.com/thumbor/lIPBHTXMId428u2uX8W5kFilPno=/0x0:5000x3333/920x613/filters:focal(2100x1267:2900x2067):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67004417/1223463312.jpg.0.jpg",
                    name: "How technology literally changes our brains",
                    description: "In 1964, the Canadian philosopher Marshall McLuhan published his opus Understanding Media: The Extensions of Man. In it he writes, “In the long run, a medium’s content matters less than the medium itself in influencing how we think and act.” Or, put more simply: “Media work their magic, or their mischief, on the nervous system itself.”",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 30,
                    image: "https://cdn.vox-cdn.com/thumbor/-Avk5HXskUHxG7nXCC47y8aOEiQ=/0x0:5500x3667/920x613/filters:focal(2050x1464:2930x2344):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64785002/GettyImages_917581126.0.jpg",
                    name: "Microsoft wants to build artificial general intelligence: an AI better than humans at everything",
                    description: "Kelsey Piper is a senior writer at Future Perfect, Vox’s effective altruism-inspired section on the world’s biggest challenges. She explores wide-ranging topics like climate change, artificial intelligence, vaccine development, and factory farms, and also writes the Future Perfect newsletter.",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 31,
                    image: "https://sm.mashable.com/t/mashable_in/review/a/apples-m2-/apples-m2-macbook-air-is-a-super-fast-wfh-companion-with-a-d_j98k.1248.jpg",
                    name: "Apple's M2 MacBook Air Is A Super-Fast WFH Companion With A Dreamy Keyboard",
                    description: "That’s because the new 2022 MacBook Air, powered by Apple’s in-house M2 silicon, is just about the ideal work-from-home (or work-from-wherever, really) companion. For a starting price of $1,200, this new M2 Air delivers everything you need any job centered around using a computer: Rock-solid battery life, a larger 13.6-inch display than previous models, a keyboard that’s to die for, and enough horsepower to handle everyday tasks with ease.",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 32,
                    image: "https://sm.mashable.com/t/mashable_in/review/g/google-pix/google-pixel-7a-is-a-great-potential-swan-song-for-the-pixel_brdu.1248.jpg",
                    name: "Google Pixel 7a Is A Great Potential Swan Song For The Pixel A-Series",
                    description: "Google made its budget phone so good that it might have to stop making budget phones altogether. Rumors are swirling that Google might kill the Pixel A-series line in 2024, and for good reason: The cheaper handsets are starting to resemble the previous year’s flagships a little too much. That’s definitely the case with the $500 Pixel 7a, Google’s newest phone and possibly the final A-series Pixel. ",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 33,
                    image: "https://sm.mashable.com/t/mashable_in/roundup/t/the-best-p/the-best-portable-bluetooth-speakers-for-2023_5e4u.910.jpg",
                    name: "The Best Portable Bluetooth Speakers For 2023",
                    description: "Using your smartphone or tablet's built-in speakers should only ever be a last resort if you want to listen to your favorite playlists on the go. Instead, you're going to want a great pair of headphones — or if you're more inclined to listen to your tunes out loud (or even with friends), a nice portable speaker. ",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 34,
                    image: "https://sm.mashable.com/t/mashable_in/deal/g/go-back-to/go-back-to-school-with-a-two-pack-of-airpod-alternatives-for_7pdr.1248.jpg",
                    name: "Go Back To School With A Two-Pack Of AirPod Alternatives For $40",
                    description: "It’s already time to prepare to head back to campus next month. You might have a fresh notebook, planner, and pens, but what about a pair of noise-canceling earbuds to help you focus when studying around campus? These Flux 7 TWS wireless earbuds pack in many of the same features as the AirPods, but two sets of them are only $39.99 (reg. $99.99) as part of this Back-to-School sale. ",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 35,
                    image: "https://sm.mashable.com/t/mashable_in/photo/default/4_fddg.1248.jpg",
                    name: "ChatGPT Website Traffic Declines For Third Consecutive As New Users Dip By 3.2% In August",
                    description: "Monthly visits to OpenAI's ChatGPT website have seen a third consecutive decline in August, although the downward trend appears to be slowing down, reports Similarweb. Global website visits via desktop and mobile dipped by 3.2% to 1.43 billion in August, following roughly 10% declines in the preceding two months. The average time spent by visitors on the site has also been decreasing since March, from an 8.7-minute average to 7 minutes in August.",
                    category: "Technology",
                    date: "12/08/2023"
                  },
                  {
                    id: 36,
                    image: "https://sm.mashable.com/t/mashable_in/photo/default/7_avp8.1248.jpg",
                    name: "Huawei's Highly Anticipated Watch GT 4 Set To Wow With Dual Sizing And Extended Battery Life",
                    description: "The eagerly awaited Huawei Watch GT 4 is ready to launch at Huawei's 'Wearable Strategy and New Product Launch' event on September 14 in Barcelona. While the full design and details are yet to be officially disclosed, a recent report has revealed the key specifications. One standout feature is its substantial battery capacity, potentially lasting up to two weeks on a single charge.",
                    category: "Technology",
                    date: "12/08/2023"
                  },

                  //Top Tecnology data...................

                {
                  id: 37,
                  image: "https://sm.mashable.com/t/mashable_in/review/a/amazons-ec/amazons-echo-show-10-is-one-of-our-favorite-smart-home-devic_r9rh.1248.jpg",
                  name: "Amazon's Echo Show 10 Is One Of Our Favorite Smart Home Devices",
                  description: "I’ve always been a little bit of a skeptic when it comes to Amazon Echo devices. Most of my family were early adopters — even my parents have multiple Echos throughout their home — but, while I love the concept of a fully integrated smart home, I wasn’t really sure if adding an Alexa device would really “level up” my experience. While I use (and love) things like WiFi-enabled lights and a smart thermostat, I was satisfied with using my iPhone to help me control all of these devices. When I got the opportunity to try out the 3rd generation of the Amazon Echo Show 10, however, I was able to see for myself if it was just a glorified speaker or something more robust..",
                  category: "TopTechMain",
                  date: "12/08/2023"
                },

                //small Top technology data...................

                {
                  id: 38,
                  image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24037406/226274_APPLE_WATCH_ULTRA_PHO_akrales_0015.jpg",
                  name: "Who is the Apple Watch Ultra really for?",
                  description: " While I’ve loved using the Ultra this past year, I don’t think this is as much a smartwatch for adventurers as it is for... Actually, I’m still trying to figure that out..",
                  category: "TopTechSmall",
                  date: "11/08/2023"
                },
                {
                  id: 39,
                  image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1128x701:1129x702):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/16294979/akrales_190522_3440_0029.jpg",
                  name: "Apple’s Lightning connector was the first great port — and USB-C might be the last",
                  description: "/ It’s all but certain that the next iPhone will have a USB-C port. But the future of charging may be no port at all..",
                  category: "TopTechSmall",
                  date: "11/08/2023"
                },
                {
                  id: 40,
                  image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915588/akrales_200421_3975_0080.jpg",
                  name: "What’s the best student laptop? We asked students",
                  description: "Shopping for a laptop can be stressful — doubly stressful if you or your children will be learning online for the first time. Kids of different ages have a range of different laptop use cases and different needs. And as the choices for best laptop and best Chromebook evolve, so do students’ needs. So I spoke to some experts on the subject: students themselves. .",
                  category: "TopTechSmall",
                  date: "11/08/2023"
                },
                {
                  id: 41,
                  image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24062761/STK110_whats_app_Kradtke_02.jpg",
                  name: "WhatsApp is working on cross-platform messaging",
                  description: "/ A new WhatsApp beta contains a clue about how Meta is preparing to comply with the EU’s Digital Markets Act that will require chat interoperability with other services..",
                  category: "TopTechSmall",
                  date: "11/08/2023"
                },      
                
                ////South_Gossip data
                {
                  id: 42,
                  image: "https://venturebeat.com/wp-content/uploads/2023/09/AdobeStock_268974526.jpeg?fit=750%2C414&strip=all",
                  name: "Generative AI in production: Rethinking development and embracing best practices",
                  description: "Generative AI is reshaping how businesses engage customers, elevate CX at scale and drive business growth. In this this VB Spotlight, industry experts shared real-world use cases, discussed challenges and offered actionable insights to empower your organization’s gen AI strategy..",
                  category: "extratech",
                  date: "12/08/2023"
                }, 
                {
                  id: 43,
                  image: "https://venturebeat.com/wp-content/uploads/2023/06/nuneybits_vector_art_of_AI_security_34d8a65e-f990-4845-a4eb-6c567c1ea1d1.png?fit=750%2C500&strip=all",
                  name: "Generative AI: A pragmatic blueprint for data security",
                  description: "The rapid rise of large language models (LLMs) and generative AI has presented new challenges for security teams everywhere. In creating new ways for data to be accessed, gen AI doesn’t fit traditional security paradigms focused on preventing data from going to people who aren’t supposed to have it. .",
                  category: "extratech",
                  date: "12/08/2023"
                }, 
                {
                  id: 44,
                  image: "https://venturebeat.com/wp-content/uploads/2023/08/cfr0z3n_flat_illustration_line_art_minimal_surreal_a_tiny_perso_a621903c-5c13-4134-8c4e-0b36cab4319e.png?fit=750%2C420&strip=all",
                  name: "Proton debuts VPN for Business, enabling IT departments to control access to content and apps",
                  description: "The aptly named Proton VPN for Business starts at $8.99 per month (on a two-year contract) and enables IT departments to deploy virtual private gateways to control access to content and apps, as well as network segmentation. It also comes with built-in protections against malware, phishing and man-in-the-middle attacks. And it is open-source, allowing experts to independently verify its security claims..",
                  category: "extratech",
                  date: "12/08/2023"
                }, 
                {
                  id: 45,
                  image: "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1315/0b677e8b82fce5d7022d4b437f8b97e4.jpg",
                  name: "How to Watch Apple Unveil the iPhone 15",
                  description: "Apple has officially declared it’s iPhone time. We’ve been preparing behind the scenes to bring you up-to-date coverage of what’s next. But we won’t see anything crop up until at least 10:00 A.M. PT / 1:00 P.M. ET. on Sept. 12, 2023, when Apple’s Wanderlust event officially kicks off..",
                  category: "extratech",
                  date: "12/08/2023"
                },

                

                //////////////////////////////////// Hollywood Deta Start From Here //////////////////////////////////////////////////////

                  {
                    id: 46,
                    image: "https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2023/07/Screenshot-2023-07-21-at-8.59.54-AM.jpg?resize=860%2C280&ssl=1",
                    name: "THE MARVELS OFFICIAL TRAILER",
                    description: "Carol Danvers aka Captain Marvel has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan, Kamala Khan aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team-up and learn to work in concert to save the universe as “The Marvels.”.",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 47,
                    image: "https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2023/07/628Dep6AxEtDxjZoGP78TsOxYbK-e1689471512406.jpg?resize=860%2C280&ssl=1",
                    name: "MISSION IMPOSSIBLE: DEAD RECKONING – PART ONE (2023) REVIEW",
                    description: "A “DEAD RECKONING” RINGER FOR GREAT SUMMER BLOCKBUSTER ACTION   The Mission Impossible franchise has had a lengthy road, stretching from the small screen (all the way back from 1966 to 1973) to the big screen in 1996, with the release of the first film (i.e. Mission Impossible) and introducing the spy riddled world of character Ethan Hunt (played by actor Tom Cruise) to",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 48,
                    image: "https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2023/07/blue-beetle-1.webp?resize=860%2C280&ssl=1",
                    name: "BLUE BEETLE OFFICIAL TRAILER 2",
                    description: "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab. When the Scarab suddenly chooses Jaime to be its symbiotic host, he is bestowed with an incredible suit of armor capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the Super Hero BLUE BEETLE.",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 49,
                    image: "https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2023/07/Napoleon-2023-Oscars-e1689034371901.jpg?resize=860%2C280&ssl=1",
                    name: "NAPOLEON OFFICIAL TRAILER",
                    description: "Witness the rise of an emperor as Sony Pictures (an Apple TV) releases the official trailer for the upcoming epic drama period piece of Napoleon. View trailer below. The film is an original and personal look at Napoleon Bonaparte’s origins and his swift, ruthless climb to emperor, viewed through the prism of his addictive and often volatile relationship with his wife and one true love, Josephine.",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 50,
                    image: "https://www.thewrap.com/wp-content/uploads/2023/09/drew-barrymore-2.jpg",
                    name: "‘Drew Barrymore Show’ Says Host ‘Was Completely Unaware’ of Fans’ Removal for WGA Pins, Expresses ‘Regret’",
                    description: "Drew Barrymore was “completely unaware” that two fans were removed from a taping of her show for wearing WGA pins, TheWrap has learned. The removal of audience members Dominic Turiczek and Cassidy Carter was blamed on “heightened security concerns.”",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 51,
                    image: "https://thefilm742.files.wordpress.com/2023/09/img_0684.webp?w=768&h=425&crop=1",
                    name: "MY BIG FAT GREEK WEDDING 3 | REVIEW",
                    description: "A critique often levelled at Nia Vardalos’ Big Fat Greek Wedding films is that each, thus far, has played largely as might a protracted sitcom episode. There’s irony there. After all, the actual sitcom spun from 2002’s original sleeper hit proved a stonking miss. Fans slept on that one. Kirk Jones’ ‘long awaited’ 2016 sequel proved more successful and now here comes a third.",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 52,
                    image: "https://thefilm742.files.wordpress.com/2023/08/img_0534.jpg?w=768&h=425&crop=1",
                    name: "STRAYS | REVIEW",
                    description: "It’s the vulgarity of Seth MacFarlane’s bromantic comedy Ted that comes to mind when watching Strays. That, rather than more obvious overlaps with the more wholesome likes of Homeward Bound and The Incredible Journey. Both by Disney. Certainly, a wilfully – gleefully, even – unnecessary blitzkrieg of F-bombs within the opening ten minutes puts pay to any notion that the film might offer up family friendly canine fun. The wilderness of penis, poo and pee-ff gags that follow merely do to hammer home the point. Strays puts the ‘R’ in grrrr. Disney it is not.",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 53,
                    image: "https://thefilm742.files.wordpress.com/2023/08/img_0049.jpg?w=768&h=425&crop=1",
                    name: "MEG 2: THE TRENCH | REVIEW",
                    description: "When is dumb fun just dumb? When is homage just stealing? Meg 2: The Trench – and the definition of a un-called for sequel – answers on both counts with with two soggy thumbs in its own wet face. As directed by the once interesting Ben Wheatley, the film plods along with listless energy, tugging along a desperately shipwrecked cast with all the enthusiasm of an industrial trawler. To its minor credit, things pick up in a last ditch dash of bonkers. This is a film of thirds. The first third is poor",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 54,
                    image: "https://thefilm742.files.wordpress.com/2023/07/img_9976.jpg?w=768&h=425&crop=1",
                    name: "MAVKA: THE FOREST SONG | REVIEW",
                    description: "There’s much to like about Mavka: The Forest Song. This being the Oleh Malamuz and Oleksandra Ruban directed Ukrainian animation that is currently enjoying a limited but UK wide cinema release. Based on a 1918 play by poet Lesya Ukrainka, the film unites folkish mythos with a more pointed contemporary resonance. If that element wisps over the heads of Mavka’s target audience, a call for unity and message of hope should at least land rather nicely..",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 55,
                    image: "https://thefilm742.files.wordpress.com/2023/07/img_9968.jpeg?w=768&h=425&crop=1",
                    name: "TALK TO ME | REVIEW",
                    description: "Having cut their teeth on YouTube, with a string of wildly popular comic horror skits, twin brothers Danny and Michael Philippou transition now to cinema like undead ducks to the waters of the River Styx. While zane and chutzpah have long set apart the pair’s antics, who could have guess that the makers of “VIOLENT Zombie Fatalities (!)” would prove so adept when it came to the weaving of complex and surprising narrative webs?",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 56,
                    image: "https://thefilm742.files.wordpress.com/2023/07/img_9927.webp?w=768&h=425&crop=1",
                    name: "OPPENHEIMER | REVIEW",
                    description: "The moral complexity of Oppenheimer is matched only by its extraordinary technical achievements. Both are peerless. This is one more towering achievement for Christopher Nolan in a filmography overflowing with creative impetus. Moreover, Oppenheimer is a remarkable, multi-sensory reimagining all that a biopic can be. There’s precious little of convention here. Linear history is torn asunder in the name of art, with a patchwork narrative instead eliciting both insight and thematic urgency from a story that is broadly well known in the public consciousness. To say the film is nuclear would do only to scratch the surface.",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 57,
                    image: "https://thefilm742.files.wordpress.com/2023/07/img_9906.webp?w=768&h=425&crop=1",
                    name: "MISSION: IMPOSSIBLE – DEAD RECKONING PART ONE | REVIEW",
                    description: "For a film four years in the making, Dead Reckoning doesn’t half land with peculiar resonance. This is the seventh in the Mission: Impossible film saga and first of a two-part extravaganza. It’s a blockbuster concerned with the perils of artificial intelligence, released in sync with the launch of Hollywood’s biggest strike in sixty years. A strike pitted against exactly that threat. ",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },
                  {
                    id: 58,
                    image: "https://thefilm742.files.wordpress.com/2023/06/img_9801.jpg?w=768&h=425&crop=1",
                    name: "INDIANA JONES AND THE DIAL OF DESTINY | REVIEW",
                    description: "Remember that aura of dissatisfaction that haunted the multiplex as the credits rolled on 2008’s Indiana Jones and the Kingdom of the Crystal Skull? It was in the mutterings of malignancy that decried Shia LaBeouf’s irritating Mutt and ridiculed the risible extraterrestrial final act. You weren’t alone. Dial of Destiny, the fifth and final in the franchise, arrives lobbied by Harrison Ford himself and the screen icon’s personal penchant for an emotional encore.",
                    category: "Hollywood",
                    date: "12/08/2023"
                  },

                  //Top Hollywood data...................

                {
                  id: 59,
                  image: "https://thefilm742.files.wordpress.com/2023/06/img_9566.webp?w=768&h=425&crop=1",
                  name: "SPIDER-MAN: ACROSS THE SPIDER-VERSE | REVIEW",
                  description: "According to common parlance, even in the face of continually enviable box office takings, Hollywood’s superhero boom is super over. The fatigue is real. DC lack coherency, Marvel have lost their creative spirit. While the reality of such a judgement remains up for debate in the sphere of live action super cinema, the argument holds no sway at Sony. Herein lies the revolution. A sequel to 2018’s wildly successful, entirely groundbreaking, Spider-Man: Into the Spider-Verse, 2023’s Across the Spider-Verse serves up the apex of blockbusting coherency and creative vigour.",
                  category: "TopHollywoodMain",
                  date: "12/08/2023"
                },

                  //small Top Hollywood data...................
  
                  {
                    id: 60,
                    image: "https://thefilm742.files.wordpress.com/2023/06/img_9565.jpg?w=768&h=425&crop=1",
                    name: "THE LITTLE MERMAID | REVIEW",
                    description: " Disney hasn’t half come a long way since Angela Lansbury and David Tomlinson shimmied a sub-marina two step back in 1971’s Bedknobs and Broomsticks. Gone are the two-dimensional toons and hand-drawn backdrops. This is the post-Avatar world of CGI wizardry. Rob Marshall’s new take on Hans Christian Anderson’s The Little Mermaid, by way of Disney’s beloved 1989 animation, follows hot on the heels of James Cameron’s Way of the Water in this respect and achieves a feat that must once have seemed impossible. Which is to say: to film a technically brilliant underwater musical...",
                    category: "TopHollywoodSmall",
                    date: "13/08/2023"
                  },
                  {
                    id: 61,
                    image: "https://thefilm742.files.wordpress.com/2023/05/img_9320.jpg?w=768&h=425&crop=1",
                    name: "LOVE AGAIN | REVIEW",
                    description: " Priyanka Chopra and Sam Heughan have chemistry. It’s bubbly, believable and worth rooting for. That’s half of the battle in any rom com and a casting coup for James C. Strouse’s Love Again – which, ironically, features Chopra’s real life husband, Nick Jonas, as the world’s worst date. You can’t make this stuff up. Chopra plays Mira Ray, a children’s book illustrator beset by grief, following the tragic death of her near-fiancé John (Arinzé Kene) two years prior...",
                    category: "TopHollywoodSmall",
                    date: "13/08/2023"
                  },
                  {
                    id: 62,
                    image: "https://thefilm742.files.wordpress.com/2023/05/img_9289.jpg?w=768&h=425&crop=1",
                    name: "GUARDIANS OF THE GALAXY: VOL. 3 | REVIEW",
                    description: " Marvel could really do with a win round about now. Bringing audiences back after a finale called “Endgame” was always going to be a tough sell. Even so, the lack of a gathering momentum in post-pandemic era of the studio’s Cinematic Universe has been conspicuous. While Doctor Strange set a strong ball rolling, there was a stumble in Thor’s stride and a downright limp in Ant-Man’s. Throw in a Jonathan Majors shaped scandal and increasing dependency on nostalgia headlining and the marvel rather begins to lose its -lous. Still, the so-called Multiverse Saga remains in early days. Perhaps a septet of intergalactic rejects can turn things around yet...",
                    category: "TopHollywoodSmall",
                    date: "13/08/2023"
                  },
                  {
                    id: 63,
                    image: "https://thefilm742.files.wordpress.com/2023/05/img_9176.jpg?w=768&h=425&crop=1",
                    name: "THE UNLIKELY PILGRIMAGE OF HAROLD FRY | REVIEW",
                    description: " Rachel Joyce translates her first novel into her first screenplay with The Unlikely Pilgrimage of Harold Fry. There’s more than a touch of the Jonas Jonassonian to the tale, in which a dull pensioner traverses the length and breadth of Britain on foot. Fry boasts fewer comic spikes than Jonasson’s 100 year-old man but is no less eccentric, his story just as strangely believable an anecdote of very human quirk. Joyce’s ponderous words find happy union in the thoughtful eye of Hettie Macdonald, one half of the directing duo behind lockdown hit Normal People, and lush cinematography of Kate McCullough. The plotting is somber and steady but offers much welcome breathing space to appreciate the minutiae of English beauty, town and country alike...",
                    category: "TopHollywoodSmall",
                    date: "13/08/2023"
                  },      
                  
                  ////Hollywood more data
                  {
                    id: 64,
                    image: "https://thefilm742.files.wordpress.com/2023/04/img_8759.jpg?w=768&h=425&crop=1",
                    name: "THE SUPER MARIO BROS. MOVIE | REVIEW",
                    description: " If Nintendo seem slow to the uptake in finally mining their prized Mario empire for big screen franchising, there’s no doubting the memory of 1993’s Bob Hoskins led Super Mario Bros. flop spurred hesitation. It figures. Time, however, heals all wounds and today’s target audience may even be the children of parents born after that film’s release. Moreover, in the hands of the studio behind Despicable Me and The Secret Life of Pets, the Japanese gaming giant can breathe easy. Chris Meledandri and the Illumination team have yet to drop the ball at the box office. Not once in thirteen years and twelve films, two of which bested the billion dollar benchmark. That’s no mean feat and a track record The Super Mario Bros. Movie has no chance of breaking...",
                    category: "HollywoodMore",
                    date: "13/08/2023"
                  }, 
                  {
                    id: 65,
                    image: "https://thefilm742.files.wordpress.com/2023/04/b8a43639-f23f-40f7-a8f5-dd50cf57745b.webp?w=768&h=425&crop=1",
                    name: "DUNGEONS & DRAGONS: HONOUR AMONG THIEVES | REVIEW",
                    description: " Many years have come and gone since Courtney Solomon – not to mention dodgy effects, dreadful acting and dismal writing – murdered Dungeons & Dragons at the multiplex. In spite of the two home video sequels that somehow limped out of its legacy, the film remains a remarkably risible tribute to a game of perhaps unparalleled cultural significance. Only now, two decades later, can the memory of Solomon’s effort be banished to the outer planes. Only with the release of Honour Among Thieves, which is, by all accounts, a tour-de-force of infectious blockbusting fun...",
                    category: "HollywoodMore",
                    date: "13/08/2023"
                  }, 
                  {
                    id: 66,
                    image: "https://thefilm742.files.wordpress.com/2023/03/img_8705.jpg?w=768&h=425&crop=1",
                    name: "SHAZAM: FURY OF THE GODS | REVIEW",
                    description: " Much has changed across DC’s Extended Universe since Shazam! first bolted into cinemas. A pass the parcel of creative control has seen Marvel’s murkier cousin shuffle between soft reboots and directional alt rights. As things stand, Henry Cavill and Ben Affleck are out, while Gal Gadot and Jason Momoa sit patiently on the bench. Robert Pattinson and Joaquin Phoenix, by contrast, enjoy a league of their own. When it comes to Shazam, the judge’s gavel has yet to fall and there’s little optimism in the jury. It would be a shame if Fury of the Gods marked the final bow for Zachary Levi’s lovably insecure supe but the battle for retention won’t be easy. It’s hard to see so second rate a sequel mirroring the success of its peppier predecessor nor enjoying anything like the audience adoration...",
                    category: "HollywoodMore",
                    date: "13/08/2023"
                  }, 
                  {
                    id: 67,
                    image: "https://thefilm742.files.wordpress.com/2023/03/img_8703-1.jpg?w=768&h=425&crop=1",
                    name: "80 FOR BRADY | REVIEW",
                    description: " There’s absurdity in the capacity of a film like 80 for Brady to boast three Oscar winners and a near-miss nominee as its leading quartet. A vague sense that something has gone rather awry in tinsel town. Is this the best available to such talent? From debutant director Kyle Marvin and two the writers of Booksmart – Sarah Haskins and Emily Halpern – this one is rote grey pound farce. Think Girls Trip meets Book Club by way of The Blind Side. An ungodly mix if ever one were. What’s more, as produced by NFL legend Tom Brady, it’s a blatant vanity project. And based on a true story don’t cha know?..",
                    category: "HollywoodMore",
                    date: "13/08/2023"
                  },  
                  
                  

                //////////////////////////////////// Fitness Deta Start From Here //////////////////////////////////////////////////////

                  {
                    id: 68,
                    image: "https://www.glofox.com/wp-content/uploads/2023/09/shutterstock_1930135445.jpg",
                    name: "How to Hire Instructors for Your HIIT Workout Classes",
                    description: "You’ve successfully built a fitness business that stands out from the crowd. But how do you keep your members engaged and coming back for more? Enter High-Intensity Interval Training (HIIT), a dynamic workout style that delivers efficient calorie burn, a heightened metabolic rate, and rapid results that fit into members’ busy schedules. ",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 69,
                    image: "https://www.glofox.com/wp-content/uploads/2023/07/shutterstock_504443035-1024x683.jpg",
                    name: "Why Fitness Challenges are Essential to Fitness Studio Retention",
                    description: "Did you know that fitness challenges are a great way to motivate your members, increase retention and give your clients more meaning and reasons to stick to their daily workouts? In fact, studies have shown that challenges and gamification help increase member motivation and make workouts more enjoyable and fun. And in an increasingly digital world, it’s great to know that gamification extends to fitness apps. So fitness challenges are a great tool to keep both your online and in person gym members accountable and motivated. ",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 70,
                    image: "https://www.glofox.com/wp-content/uploads/2023/07/shutterstock_525670930-1024x684.jpg",
                    name: "How to Open a Personal Training Studio",
                    description: "So you’ve decided to open a personal training studio—congratulations! By taking your passion for helping others thrive to the next level, you’re building a healthier community while creating a better living for yourself. There are many perks to being your own boss. But if you’re new to the whole “running your own business” thing, there are a few things you should know before diving in so that you’re set up for success. ",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 71,
                    image: "https://ik.imagekit.io/02fmeo4exvw/blogs/GettyImages-1364649132%20%281%29.jpg?tr=w-1000",
                    name: "Is Trauma-informed Training the Next Fitness Frontier?",
                    description: "Trauma has significant mental, physical and emotional effects, and it is exceedingly common, with 70% of U.S. adults experiencing a traumatic event in their lifetimes. It is therefore crucial that personal trainers have a basic understanding of trauma, how it shows up physically, how it affects clients’ ability to hit their health and fitness goals, and how to best support their clients who have been impacted by trauma.",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 72,
                    image: "https://blog.nasm.org/hubfs/Imported_Blog_Media/How-to-Make-Health-and-Fitness-a-Lifestyle.jpg",
                    name: "FITNESS TIPS FOR LIFE: HOW TO MAKE HEALTH AND FITNESS A LIFESTYLE",
                    description: "With the start of the New Year, many of us have made resolutions to improve our health and fitness. While having specific health and fitness goals in mind is excellent, people often go to extremes to accomplish these goals. They try the newest fad diet or workout trend and often end up exhausting both their mental and physical energy.",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 73,
                    image: "https://static.toiimg.com/thumb/103579736.cms?width=680&height=512&imgsize=1542069",
                    name: " Drinks you should consume while working out",
                    description: "Dehydration is the lack of adequate body fluids for the body to carry on normal functions at an optimal level. Dehydration occurs when the body loses more fluids than it takes in. Fluid deficits of more than 2 % of body weight can compromise endurance exercise performance.",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 74,
                    image: "https://ik.imagekit.io/02fmeo4exvw/blogs/GettyImages-852401728.jpg?tr=w-1000",
                    name: "Unpacking Body Shame with a Licensed Psychologist",
                    description: "Body shaming is when a person expresses unsolicited, mostly negative opinions or comments about someone else’s body or their own. While body shaming is usually associated with fat or skinny shaming, it's much broader in scope and includes being shamed for the size and shape of any or all body parts (e.g., height, hair texture, amount of hair or facial features).",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 75,
                    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2021/06/how_to_improve_gut_health_getty_creative.jpeg.jpg",
                    name: "3 powerful natural remedies to fix bloating by balancing gut bacteria",
                    description: "Almost everyone experiences bloating, every now and then. Usually, it is caused by consuming certain foods and drinks, and swallowing air when you eat. Apart from this, bloating can also be due to more serious causes, such as constipation, a food intolerance and irritable bowel syndrome. Some people feel bloated around their period dates.",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 76,
                    image: "https://media1.popsugar-assets.com/files/thumbor/Q3ZwJBjxPUv7iJQHbfidIbjpcaE=/fit-in/1584x1584/filters:format_auto():upscale()/2023/04/07/901/n/1922729/tmp_pyviMu_ab5bd1a444d746d0_PS23_04_Wellness_75InstagramCaptionsForGymSelfies_Thumbnail_1456x1456.jpg",
                    name: "Instagram Captions Perfect For Those Sweaty Gym Selfies",
                    description: "Whether you're already sipping a pumpkin spice latte or dutifully waiting until the season officially kicks off on Sept. 23, fall is nearly here. And whether you like to take advantage of the cooler temps to go for a run outside or use them as an excuse to hit the gym, working out is a perfect way to channel the back-to-business vibes of the season. And on the days when you do manage to get to the gym for a solid workout, we're big fans of commemorating the occasion with a well-deserved social media flex — or a real-talk selfie with a gym-related caption that acknowledges how hard you worked to make a sweat session happen that day.",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 77,
                    image: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/19190529/download9.jpg",
                    name: "500+ Words Essay on Health and Fitness",
                    description: "We have always heard the word ‘health’ and ‘fitness’. We use it ourselves when we say phrases like ‘health is wealth’ and ‘fitness is the key’. What does the word health really mean? It implies the idea of ‘being well’. We call a person healthy and fit when he/she function well physically as well as mentally.",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 78,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2023/05/Job-Tile-Image.png.webp",
                    name: "nterview With A Personal Trainer: Helpful Fitness & Nutrition Advice From Caitlin & Reka",
                    description: "Invest in a PT if you can! A good PT will knock out any nerves within the first few sessions. They will give you structure and an effective programme to follow which will save you hours of tedious cardio or hopping from one piece of kit to the next! If private PT is not an option for you, try a small group training class where the instructor can talk you through each exercise and ensure your form is correct from the get go. The last thing you want to do is get injured from poor form just when you’re starting out!",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 79,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2023/03/squash-coach-teaching-young-child.jpg",
                    name: "Children’s sports activities at Bluecoat Sports this Easter",
                    description: "It’s important that children are provided with opportunities to learn, grow, and explore in a safe and nurturing environment. One of the most effective ways to do this is through engaging activities that capture children’s imaginations and spark their curiosity. By providing kids with the opportunity to partake in an activity that engages them, they can improve their social skills, coordination, mental health and gain a multitude of new skills.",
                    category: "Fitness",
                    date: "13/08/2023"
                  },
                  {
                    id: 80,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2019/02/A18I5804-1024x683.jpg.webp",
                    name: "How To Track Your Fitness Progress",
                    description: "If you’re just starting out in improving your health and fitness, or have been working out for a while now, it’s super important to make sure you’re tracking your progress as you go. This will not only ensure you’re working towards your goals, but it will also help to keep you motivated by seeing how far you’ve come.",
                    category: "Fitness",
                    date: "13/08/2023"
                  },

                  //Top Fitness data...................

                {
                  id: 81,
                  image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2019/08/The-Fitness-Yard-4-516x344.jpg.webp",
                  name: "Celebrating Two Years Of The Fitness Yard At Bluecoat Sports",
                  description: "We’re delighted to be celebrating the anniversary of our outdoor fitness centre in Horsham – the Fitness Yard. Since August 2019, we have welcomed countless members and non-members to our outdoor fitness gym and workout sessions which feature state of the art outdoor gym equipment and fully qualified fitness instructors. Keeping fit and enjoying the benefits of regular outdoor exercise, has never been easier.",
                  category: "TopFitnessMain",
                  date: "13/08/2023"
                },

                  //small Top Fitness data...................
  
                  {
                    id: 81,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2018/09/bodypump.jpg.webp",
                    name: "Fitness Classes At Bluecoat Sports",
                    description: "We’re delighted to have reopened our doors to our members to use our fully equipped gym in Horsham, swimming pool and rackets sports, as well as our indoor workout classes. We have been working hard behind the scenes to make Bluecoat Sports as safe as possible and were thrilled to welcome back our members just in time to get fit this summer!",
                    category: "TopFitnessSmall",
                    date: "13/08/2023"
                  },
                  {
                    id: 82,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2021/03/Exercise-Running.png.webp",
                    name: "How Exercise Can Improve Mental Health",
                    description: "It’s a well known fact that exercise and physical activity is good for our physical health, helping us to lose weight, build muscle and keep ourselves generally fit and healthy. However, the pandemic has highlighted the fact that exercise is also a great way to improve mental health During these uncertain and unprecedented times, regularly exercising and taking part in physical activity can not only help to improve your physical fitness whilst your day to day movements are reduced, it can also help to improve your mood and reduce stress.",
                    category: "TopFitnessSmall",
                    date: "13/08/2023"
                  },
                  {
                    id: 83,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2021/12/Winter-exercise.png.webp",
                    name: "How To Exercise In Winter",
                    description: "Finding the motivation to stay active can be difficult at the best times, and when the nights draw in and the temperature falls it can be more tempting than ever to hang up the workout gear and retreat to the comfort of the sofa. However, with a little focus and dedication you could find the ideal routine to keep those endorphins pumping and your body healthy over the cold winter months.",
                    category: "TopFitnessSmall",
                    date: "13/08/2023"
                  },
                  {
                    id: 84,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2018/09/gym-service-tile-1-516x344.jpg.webp",
                    name: "A Beginner’s Guide To Joining The Gym",
                    description: "Joining the gym for the first time can be an exciting but daunting experience, as it can be quite hard to know what to expect. We’re here to reassure you that there’s nothing scary about joining the gym and to give you the confidence you need to turn up and achieve your goals. Below, we have put together some of the most important things to consider when joining a gym, as well as answers to some of the most frequently asked questions we get about the gym.",
                    category: "TopFitnessSmall",
                    date: "13/08/2023"
                  },      
                  
                  ////Fitness more data
                  {
                    id: 85,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2019/09/bluecoatslive_hero_small.jpg.webp",
                    name: "Bluecoat Sports Fitness Festival September 2019",
                    description: "It’s that time of year again and this year, it’s bigger and better. Introducing the Bluecoats Live! Fitness Festival 2019 taking place on Friday 27th September and Saturday 28th September. This is your chance to find out all that Bluecoat Sports has to offer. Book onto a class, go for a swim or play some squash on us. It’s all FREE!",
                    category: "FitnessMore",
                    date: "13/08/2023"
                  }, 
                  {
                    id: 86,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2018/02/open-day-2018-1-768x512.jpg.webp",
                    name: "What happened on our Open Day 2018?",
                    description: "We were thrilled to welcome over 250 attendees over the two days, including non-members attending Classes with us for the first time. The weekend was busy with all the favourite classes, including Body Combat, Body Balance, Body Pump, Dance Fusion, CXWORX, Kettlebells, Step Aerobics, Power Yoga, and GRIT Cardio.  We also added even more variety with some new open day activities including Family Indoor Cycling, Tai Chi, Boxercise and Introduction to Pilates, which proved to be popular.",
                    category: "FitnessMore",
                    date: "13/08/2023"
                  }, 
                  {
                    id: 87,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2017/11/Bluecoats-9794-768x512.jpg.webp",
                    name: "A Christmas lunch without the guilt!",
                    description: "Christmas is a joyful time – we get to spend time with our loved ones. Give each other pressies and eat. Did I mention eat? Most of us live for Christmas dinner with all the trimmings. We tell ourselves that we have been SO good all year this is the one time that we get to ‘treat’ ourselves. Fair enough. But you don’t want all that hard work to go to waste. By making healthy choices you can still enjoy a yummy Christmas lunch without the guilt. Win-win I say!",
                    category: "FitnessMore",
                    date: "13/08/2023"
                  }, 
                  {
                    id: 88,
                    image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2014/04/slide-pool-516x344.jpg.webp",
                    name: "It’s all tech-go at Bluecoat Sports this month!",
                    description: "Being situated at the glorious Christ’s Hospital School does have a couple of downfalls, one of which is that our timetable must change on a regular basis. Whilst we always try our hardest not to interrupt our Member’s routines, communicating changes to the timetable can sometimes be challenging. To combat this, we have re-vamped our timetable with a vivid new look and will be uploading our Half Term, Summer and Easter timetable to the website as well. This will allow us to ensure that our members are viewing an up to date version of the programme and of course save the trees on printing!",
                    category: "FitnessMore",
                    date: "13/08/2023"
                  }, 
                  
                  

                //////////////////////////////////// Food's Deta Start From Here //////////////////////////////////////////////////////

                  {
                    id: 89,
                    image: "https://images.indianexpress.com/2016/02/kotthu-roti-with-salad-chili-base-2.jpg",
                    name: "Get a taste of Ceylon in 3 courses, from Don’t Give A Fork",
                    description: "Mumbai-based pop-up Don’t Give A Fork — set up by food bloggers Payal Bhuptani and Upasana Shukla Maheshwari — is onto their fifth outing this weekend with a Sri Lankan pop-up. Says Bhuptani, “We set up the blog two years ago and launched our first pop-up in August 2014.” The two partners are also travel enthusiasts, and most often come up with ideas for their pop-ups based on their trips. The Sri Lankan pop-up is a result of Maheshwari’s travels to the country in December last year",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 90,
                    image: "https://images.indianexpress.com/2016/03/dimly-lit-meals-2.jpg",
                    name: "Why you should pick up a book that’s anti-food porn",
                    description: "Charred pizza, sausages that look like they belong in the bog, cannelloni that is rightly likened to ‘raw sewage’ by Tom Kennedy — the man responsible for documenting what are possibly the most tragic-looking meals you’ve ever seen — are for all to see on his Tumblr account ‘Dimly Lit Meals For One’. The US edition of a selection of the best — or worst, depending on how you look at it — shots will be out in a book next month. See a picture gallery of Dimly Lit Meals For One here.",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 91,
                    image: "https://images.indianexpress.com/2015/01/mangodi-main_2.jpg",
                    name: "How my mother made me try Mangodi Ki Sabzi",
                    description: "One of my distinct memories of food during childhood is rows and rows of mangodi (and potato chips and sabudana chips and fries!) drying in the sun on the terrace. More because we were asked to go up on the terrace regularly and see if the cover is fine; if there are no birds and then finally when they have dried, to bring them down.",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 92,
                    image: "https://images.indianexpress.com/2014/11/aaloo-parantha-main.jpg",
                    name: "Breakfast like a king: Here’s how to make Aloo Paratha",
                    description: "In my kitchen, Aloo Paratha presides over all other parathas. It’s indisputably the king of parathas. Since the past few weeks, we have been having them at least once every week for breakfast. As they say breakfast like a king; we need a king to do justice to it. Potato is a quintessential part of Indian cuisine, especially for a vegetarian. Breakfast, snack or main course – the menu is incomplete without potato dishes.",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 93,
                    image: "https://images.indianexpress.com/2023/09/recipe.jpg?w=640",
                    name: "Try this ‘naturally high in protein’ dessert recipe to satiate your sugar cravings",
                    description: "There is nothing quite like delicious desserts on a stressful day, after all ‘stressed’ spelled backward is ‘desserts’, making it one of the best ways to de-exhaust after a long busy day at work and give the much-needed energy boost! While most of us who are on a strict diet try to refrain from eating sweets due to their high sugar content and calories, it is obvious for us to look for healthier alternatives to satiate our sugar cravings.",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 94,
                    image: "https://images.indianexpress.com/2023/09/bhindi_1200_getty.jpg?w=640",
                    name: "Should you eat okra or bhindi twice a week?",
                    description: "Dan Gubler, PhD who is an expert on how natural molecules from plants can dramatically improve human health, shared on his Instagram that if one has diabetes, one of the best foods to control blood sugar and also to reverse insulin sensitivity is okra. “Okra contains phytonutrients called quercetin glucosides which in scientific terms helps reduce blood sugar levels, insulin levels, and overall metabolic health. Go, eat okra twice a week,” said Gubler.",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 95,
                    image: "https://images.indianexpress.com/2023/09/poha-sprouts-anshula_200.jpg?w=640",
                    name: "Anshula Kapoor eats poha with sprouts; why should you too?",
                    description: "What are some of the best breakfast combinations that you begin your day with? For Anshula Kapoor, there is nothing that beats the flavourful combination of poha with boiled sprouts. The social media influencer took to Instagram Stories to share a glimpse of relishing the all-time snack favourite.",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 96,
                    image: "https://images.indianexpress.com/2023/09/fruits_200_getty-1.jpg?w=640",
                    name: "Dr Shriram Nene suggests these simple swaps to make your snacks and meals healthy",
                    description: "If you are someone who is always dabbling with the question of how to make your snacks and meals healthier, you are at the right place. One of the best ways to do so is by making some simple swaps that can start right from your kitchen. Addressing this most common question, cardiothoracic surgeon Dr Shriram Nene recently shared a list of simple swaps that can help.",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 97,
                    image: "https://th-i.thgim.com/public/news/cities/Tiruchirapalli/fwr50e/article38172853.ece/alternates/LANDSCAPE_1200/Ty08bloggerstry",
                    name: "Food bloggers a big hit among locals",
                    description: "While people were confined to their homes during the lockdown as a precautionary measure against the spread of COVID-19, social media became a platform for quick recipes, budding home chefs and the most popular- food bloggers. People who would have otherwise spent their time doing regular jobs began to, through their videos, entertain people and also showcase food trends in the city.",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 98,
                    image: "https://magazine.education.investing.com/wp-content/uploads/2022/10/Article-Image-Eggs-BadDietLP.jpg",
                    name: "Commonly Eaten Foods That Are Bad for Your Health and Your Wallet",
                    description: "We all lead busy lives, and it can be hard to remember to eat healthily. Sometimes, it’s easier to just grab food off the shelf, thinking only of the convenience and not of the nutritional value. Processed foods are always on-hand, which is why they make so much money for manufacturers. And they’ve saved us time and energy in the past. But, at what cost? ",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 99,
                    image: "https://magazine.education.investing.com/wp-content/uploads/2021/09/Article-Image-BadDiet-DietSoda.jpeg",
                    name: "This is the  Diet Cola",
                    description: "Diet cola portrays itself as a healthy alternative to regular cola. After all, it’s sugar-free! And, it has no calories. It’s often been the go-to drink for dieters everywhere. Though Mayo Clinic says that it is okay if consumed in minimal quantities, people who drink more than a can a day could be headed for some serious harm. According to Healthline, studies have shown that diet colas aren’t so “diet’ after all. Artificial sweeteners can lead to chronic kidney disease, tooth decay (because of the acidic pH level), and an increased risk of osteoporosis, depression, and heart disease. More studies are needed to be 100% sure, but you might want to cut back on diet cola or avoid it totally.",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 100,
                    image: "https://magazine.education.investing.com/wp-content/uploads/2021/09/shutterstock_image-2022-08-30T115359.173.jpg",
                    name: "American Cheese Slices",
                    description: "Imitation cheese often has misleading packaging. These products, instead of being made with ingredients like milk fat the way normal cheese is, have vegetable oils, trans fats, flavorings, and preservatives. All of these ingredients make imitation cheeses much less healthy than real cheeses. You can identify imitation cheeses among other things, because they are considerably less expensive than real cheese.",
                    category: "Food",
                    date: "14/08/2023"
                  },
                  {
                    id: 101,
                    image: "https://magazine.education.investing.com/wp-content/uploads/2022/12/Article-Image-BadDiet-Chocolate-Covered-Rice-Cereal.jpeg",
                    name: "Chocolate-Covered Rice Cereal",
                    description: "Chocolate-covered rice cereals are often advertised as a great option for the little ones to have breakfast. What is not advertised, of course, is that they are one of the most harmful cereals on the market. A single serving of this cereal provides between 55 and 73% of the total sugar recommended for children in a day. In addition, many of these types also have colorants associated with the development of hyperactivity and attention deficit disorders..",
                    category: "Food",
                    date: "14/08/2023"
                  },

                  //Top Food data...................

                {
                  id: 102,
                  image: "https://magazine.education.investing.com/wp-content/uploads/2021/09/Article-Image-BadDiet-Palomitas-de-maiz-1-1.jpg",
                  name: "Something New To Try Flavored Popcorn",
                  description: "Natural popcorn can be a tasty and healthy snack, as it’s low in calories. Sadly, the ones that are sold ready-made in the supermarket are almost the opposite, especially since they have artificial flavorings. For example, caramel popcorn can be incredibly high in sugar and fat. A bag, even a small one, of caramel popcorn can contain 12.8 tablespoons of sugar and up to 564 calories. There is no doubt that preparing this snack at home and keeping it unflavored is a much better option than buying it. Disney movies are just as good, no matter the snack!",
                  category: "TopFoodMain",
                  date: "13/08/2023"
                },

                  //small Top Foods data...................
  
                  {
                    id: 103,
                    image: "https://c.ndtvimg.com/2023-06/5l4lkmh_fruits-and-vegetables_625x300_26_June_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
                    name: "Watch: Man Shares Hack For Buying Fruits, Internet Dissaproves",
                    description: "Buying fruits is an everyday task, whether it's from bustling supermarkets or humble roadside stalls. But, here is the twist - sometimes those fruits that look picture-perfect on the outside turn out to be disappointing once you slice into them. So, what is the secret to avoiding this fruit regret? Well, an Instagram reel is here to rescue all those who struggle with fruit selection. These simple tips claim to offer easy ways to decipher a fruit's quality by simply inspecting its outer appearance. But guess what? The internet does not seem to be extremely convinced as the comment section of this video is full of critical comments.",
                    category: "TopFoodSmall",
                    date: "13/08/2023"
                  },
                  {
                    id: 104,
                    image: "https://c.ndtvimg.com/2020-06/qc8ndie_rajma-sandwich_625x300_04_June_20.jpg",
                    name: "Top 18 Veg Recipes Under 30 Minutes | Quick Veg Recipes",
                    description: "Top 17 Veg Recipes Under 30 Minutes: Love to eat but don't have the time to cook? Well, we bring you quick recipes that can be rustled up within 30 minutes without requiring much effort. Sounds too good to be true? Try it to believe it! There's nothing quite like enjoying simple flavours in home-made meals. Not only is it healthy, you can also pick your favourite ingredients and customise the flavours as per your liking. And when it comes to veggies there are so many delicious ways you can cook them! You should make the most of seasonal produce to load up on all the essential nutrients.",
                    category: "TopFoodSmall",
                    date: "13/08/2023"
                  },
                  {
                    id: 105,
                    image: "https://c.ndtvimg.com/2021-03/2k8rgcio_microwaves3_625x300_11_March_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
                    name: "9 Best Indian Microwave Recipes | Easy Microwave Recipes",
                    description: "Indian Microwave Recipes: Cooking an Indian meal is no less than an art. Combining the right spices in a specific amount, simmering it for the right time, till the aromatic essence fills the house, all of this takes a lot of efforts. While it is no less than an invigorating experience to cook an Indian dish, it is also a time-consuming task and a tough one at it. We all must have seen our mothers and grandmothers spending hours in the kitchen to cook us the perfect chicken curry or a delectable biryani, but what if we tell you that you can cook the same without having to go through the same time-consuming process?",
                    category: "TopFoodSmall",
                    date: "13/08/2023"
                  },
                  {
                    id: 106,
                    image: "https://i.ndtvimg.com/i/2017-01/sarson-ka-saag_620x350_81484297304.jpg",
                    name: "17 Best Punjabi Recipes | Easy Punjabi Recipes",
                    description: "Punjabi Recipes: One of the most impressive things about Punjabi food is its variety. While meat lovers can never have enough of the evergreen Butter Chicken, Bhuna Gosht, Tandoori Chicken and Amritsari Machchi, vegetarian fare is equally delightful. Sarson ka Saag, Chole Bhature and Dal Makhni are just a handful of vegetarian Punjabi specialities with fans across the globe. Think of Punjab and you can imagine its earthy heritage of lush green fields and robust lifestyle. What makes Punjab different from the other states is its culinary treasure, it is a state synonymous with food. Punjabi food is a lot like Punjabis - rich, robust and full of life. Bold textures and hearty ingredients are what make Punjabi cuisine so popular all across North India.",
                    category: "TopFoodSmall",
                    date: "13/08/2023"
                  },      
                  
                  ////Foods more data
                  {
                    id: 107,
                    image: "https://c.ndtvimg.com/2023-09/jndv47qg_losteria-bella_625x300_02_September_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
                    name: "Meet L'Osteria Bella - Aerocity's First And Only Authentic Italian Restaurant",
                    description: "While our love for Indian food always remains, Italian food could comfortably occupy the top spot too. From burrata salads to wholesome wood-fired pizzas, and handmade pastas to scrumptious desserts - there is so much that Italian cuisine has to offer. If you are looking for a new Italian restaurant to add to your list of the most visited places in Delhi, we have just what you need. L'Osteria Bella in Holiday Inn, Aerocity is treating us to some authentic Italian food without even venturing out of the city. It is, in fact, one of the first and only authentic Italian restaurants in the Aerocity area.",
                    category: "otherfoods",
                    date: "13/08/2023"
                  }, 
                  {
                    id: 108,
                    image: "https://c.ndtvimg.com/2023-08/7ih5n4h_soul-the-ashoka_625x300_23_August_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
                    name: "Soul Tapas Bar & Restaurant In The Ashoka Will Please Your Soul ...And Stomach",
                    description: "Welcome to the first-ever Spanish living room in Delhi! Nestled in The Ashoka Hotel, Soul promises a high-octane evening of mouth-watering delicacies and foot-tapping music amid a plush yet relaxed ambience of the living room. But if you are seeking al fresco dining under the stars, they have a lawn set up perfectly to bring you closer to nature. With large stone art, high tables and a hint of greenery, it is perfect to get the party started. ",
                    category: "otherfoods",
                    date: "13/08/2023"
                  }, 
                  {
                    id: 109,
                    image: "https://c.ndtvimg.com/2023-08/dt3jmq9g_elina-vara_625x300_14_August_23.jpg",
                    name: "Elina Vara: Where Gastronomy Meets Serenity In The Heart Of Chattarpur Farms",
                    description: "Leave behind the hustle and bustle of the city and step into a mesmerising oasis at the serene Chattarpur Farms. Here, expansive urban farmhouses provide the perfect setting for a culinary paradise that welcomes you with open arms. Tucked away in this picturesque setting is Elina Vara, a name that reflects the essence of purity. This charming haven invites guests to indulge in a dining experience that is not only environmentally conscious but also incredibly delightful.",
                    category: "otherfoods",
                    date: "13/08/2023"
                  }, 
                  {
                    id: 110,
                    image: "https://c.ndtvimg.com/2023-07/rtqea1k_hawking_625x300_28_July_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
                    name: "The Hawking St.: Where Street Food Dreams Come True In Noida",
                    description: "Food has a unique way of bringing people together, and 'The Hawking St.' in Noida embraces this idea by introducing a delightful fusion of Indian cuisines from all corners of the country. Founded by the Bengali couple Anish Dev and Sanghamitra Sarcar, this street food bistro aims to unite food lovers through their carefully curated selection of national treasures. Our experience at The Hawking St. revealed not only delectable specialities but also an inviting atmosphere that sets it apart from other eateries.",
                    category: "otherfoods",
                    date: "13/08/2023"
                  },

                  //////////////////////////////// Home Page Content //////////////////////////////

                  {
                    id: 111,
                    image: "https://www.koimoi.com/wp-content/new-galleries/2023/01/box-office-pathaan-takes-biggest-opening-ever-goes-past-kgf-chapter-2-and-war-the-top-10-openers-001.jpg",
                    name: "Slider First Image",
                    description: "Not Yet",
                    category: "SliderImg1",
                    date: "13/08/2023"
                  },
                  {
                    id: 112,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1cuhFo1Mn6Fa6YnTk2J5nJattGCxC7xtPg&usqp=CAU",
                    name: "Slider First Image2",
                    description: "Not Yet",
                    category: "SliderImg2",
                    date: "13/08/2023"
                  },
                  {
                    id: 113,
                    image: "https://atees.in/wp-content/uploads/2016/12/IT-Company-thrissur.jpg",
                    name: "Slider First Image2",
                    description: "Not Yet",
                    category: "SliderImg3",
                    date: "13/08/2023"
                  },


                  ///////////////////////////////////// Latest Post ////////////////////////////////

                  {
                    id: 114,
                    image: "https://media.wired.com/photos/649cc6fb82d37ced55dff64f/master/w_1920,c_limit/Telegram-Influencers-On-Edge-Wagner-Rebellion-Business-1259022991.jpg",
                    name: "Wagner Mutiny Puts Russia’s Military Bloggers",
                    description: "THE MOURNERS CARRIED armfuls of red roses. There was a military gun salute. Hundreds of people crowded to watch the coffin be lowered into the ground. This wasn’t the funeral of a celebrity or a government official. This was the send-off for Vladlen Tatarsky, a Russian nationalist Telegram blogger who was killed in April in a mysterious bomb blast in a St. Petersburg café.",
                    category: "LatestImg",
                    date: "13/08/2023"
                  },
                  {
                    id: 115,
                    image: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/09/12/1450c892e9de9936daa497a2819462961694541613417402_original.jpeg",
                    name: "iPhone 15, iPhone 15 Pro Series Launched Alongside Apple",
                    description: "For starters, all four iPhone 15 models will sport USB-C, adhering to new European regulations and ditching Apple's traditional lightning port. Additionally, the iPhone 15 series saw the elimination of the front display notch entirely, as the vanilla models will come with the Display Island as well. The iPhones also commonly feature 48-megapixel primary snappers.",
                    category: "LatestImg",
                    date: "13/08/2023"
                  },
                  {
                    id: 116,
                    image: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/09/12/23e11f98ffa02fbe4a2d9fd772d556ce1694508929768775_original.jpg?impolicy=abp_cdn&imwidth=720",
                    name: "Barbie OTT Release: Available To Rent On Prime Video",
                    description: "New Delhi: OTT platform Prime Video is bringing a treat for movie lovers across India with the premiere of global blockbuster, ‘Barbie’. The movie caused a phenomenon known as Barbenheimer when it was released on July 21 with Christopher Nolan's Oppenheimer. Launching within a few weeks of its theatrical release, the movie is available to rent on Prime Video at INR 499. ",
                    category: "LatestImg",
                    date: "13/08/2023"
                  },
                  
    ])
    return(
        <>
            <store.Provider value={[data, setData]}>
                {props.children}
                    {/* <Bollywood />
                    <Hollywood /> */}
                    {/* <Food /> */}
            </store.Provider>
        </>
    )
}

export default ContextStore;