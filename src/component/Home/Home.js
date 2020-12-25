import React, { useState, useEffect } from 'react'
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import apiService from '../../api.service';

import './Home.css';
function Home() {
    let [data, setData] = useState([]);
    useEffect(() => {
        console.log('welcome')
        apiService.getNewsEnglish().then(data => setData(data))
    }, [])
    let newsData = [
        {
            id: 1,
            title: 'We shall fight, We shall win!',
            writter: 'Sukhdarshan Natt, Singhu Site',
            description: ["After fighting a long fight in Punjab, to force the hand of a stubborn Modi government, we gave the call 'On 26-27 November, go to Delhi.' The Modi government thought our call- to - action was an empty threat.An unconcerned Modi ordered his BJP Chief Minister Khattar of Haryana to stop us, because he thought that we will sit at the Punjab - Haryana border for a month or two, then get tired and go home.But our enthusiastic, farm machinery - expert youth ruined their plans.Our young brothers from Haryana started this.On November 25, they ran over the robust police barricades at Ambala, Karnal, and Penipat in a short time, passed through Murthel, and knocked on the doors of Delhi.Inspired by them, Punjab's farm unions and youth broke through checkpoints at Shambu, Khanauri, Pehowa, Ratia et a', while facing tear gas and water cannons in freezing temperatures, concrete blocks weighing tons, barricades, barbed wire fences as sharp as a blade, mountains of dirt, deep trenches in the roads, and pushed through and passed the road - blocking trucks and shipping containers to join shoulder to shoulder with their brothers from Haryana.With an endless caravan of tractors decorated with fags of dozens of Punjab and Haryana farmer unions, and tarp - draped trollies resembling tanks, provocative lyrics of the movement's messages echoing from tractor speakers, everyday essentials including food supplies gathered, this caravan arrived as organized and disciplined as an all-powerful army to claim victory again in Delhi.", "On the main highways from Punjab to Delhi where dozens die in road accidents daily, our youth fought incessantly without a single road accident end proved that they are not only deft at wielding agricultural machinery in songs and fields, but also are capable of using this machine expertise on the highway in an anti-government movement. In the general revolutionary campaign of November 26-27, only 1 farmer warrior, Dhanna Singh of Khehali Chelaan village, District Manse, was martyred. Even this was not a result of the protestors, but due to a merchant truck driver's mistake.", "Since November 26, the main highways that connect Delhi to Punjab / Haryana, Himachal, and Jammu & Kashmir via both Karnal and Rohtak have been shut down.After four or five days, the farmers of Uttar Pradesh and Uttarakhand have shut down two other main eastbound highways.Now the plan is to choke the Modi government by shutting down highways to the west and to the south, to Jaipur and Agra, by December 14. Alongside the medias false propaganda, the immovable Modi government has refused to hear the main demands of our farmer representatives, despite pressure.Now the Modi government will use this effort at reconciliation as reverse propaganda, but has been forced to make repeated appeals to the protesting farmers for formal discussion.The protesting youth, elder, men, and children are patiently and peacefully committed to a 'Ghera Dalo, Dera Dalo'('Surround Delhi and Camp Out') Satyagraha.The farmers, market facilitators, shopkeepers, traders, social and religious organizations, and the general public of Haryana, Punjabi, Delhi, and other states are providing unbelievable, limitless support of every kind to the protesting farmers.The honest and unbiased national, international, and Punjabi media is sharing inspiring and accurate news and photos of the protest with the whole world.Alongside our own  nation, this rightful and peaceful farmer protest has received complete support from the whole world's people end governments of other countries. Even though the Modi government is being pressured to retreat, because of its corporate alliances and fascist ideology, it is not ready to take back the 3 Farm bills.", "Instead, they are trying to malign the movement and divide it using lackeys with sinister schemes.They are on the lookout for ways to paint the protest as violent and find reason to attack.They are embedding instigating agents amongst the farmers or inciting conflict amongst farmers to find opportunity justify an inhumane attack on them.My farmer brothers, stay united and beware of any kind of provocations.Coexist with the local people with love and cooperation.Beware of every kind of mischief and trouble making elements, useless boasts or goading ideas, or speeches and slogans that divide.Forget the Modi government, not even the tyrannical British government could end our united, disciplined, peaceful protest.", "Even now, they are testing our peace, patience, and discipline.So, end provocations and attempts to divide with patience and vigilance, and stay committed to the providential slogan - 'We shall fight – We shall win'"]

        },
        {
            id: 2,
            title: "People's Protest",
            writter: "Dr. Udoke, Singhu Site",
            description: ["After the central government passed the anti-farming bills, the protest started by the farm unions to get what is rightfully theirs, has become an intractable, ubiquitous people's movement. Perhaps, in current times, the people's astuteness determinedly remaining peaceful has overwhelmed the decision makers of the central government, and generally, this is a good sign. ", "The people-elected governments of Punjab or the nation have crushed people's movements by betraying them during discussions numerous times in the past, belying even the loyalties of the movement leaders, but a certain divine phenomenon has unfolded during this protest and a narrative has emerged in the collective psyche that has pressured even the movement leaders and made them prioritize public sentiment in every decision.", "There have been not one, but many meetings with the government and so far without resolution, but the government's attitude during the meetings shows that this issue has become has become a bone in their throat and the masses have become the real heroes. In the meetings that have occurred so far, where the government's behavior has revealed its obstinate nature, it can be understood that this stubbornness is rooted in the ego of the leader of the reigning party, or in other words, by either fulfilling the demands of the farmers or rolling back the farm bills, Narendra Modis image as an ironman, undefeated, and immortal prime minister appears to disintegrate.", "The proposal sent by the government after multiple meetings with the farmer unions is like the same wine in a new bottle or say, putting a new label on expired medication.", "That this proposal repeatedly offers to change every word of the bills but insists upon no mention of repealing the bills makes it clear that these bills are not pro farmer and are highly ambiguous, which is why it offers to change every word and secondly, by insisting that the word repealnot be used, they want to cover up their own failures. If we look at the government-sent proposal word by word, it tries to convince the farm unions that the laws are pro farmer but the farmers are too small-minded to understand the benefits that will arrive at some far away time in the future.", " It is worth mentioning that alongside the farm union leaders, who are being extremely careful in their decision making, is the vigilant young generation who understands every point in depth because they are connected with social media.", "Probe for the proposal's hidden agenda, there is nothing more than utter lies. This can only be understood as the corporate elites launching e bomb in collusion with the government. The proposal tries to argue that purchase laws will remain stable and continue as is, but when the private corporations begin to do business alongside the government backed marketplaces, how long will the government marketplaces be able to survive? It is fact that the government backed marketplaces and agencies will be shutdown when, for a time, the private corporations will offer better prices, and then the government backed marketplaces will become valueless, and then the closure of the marketplaces will also be blamed on the farmer, and all rights will be given to private corporations.", "The amendments to the bulk commodity laws will increase the black market as the private corporations will purchase grain from farmers for a low price and then sell it back to the consumer at their chosen price. It is being said that the farmer will retain rights to hold and maintain grain, but does the farmer have the means to stock his harvest and ability to maintain it for a long time? So the government's proposal that has been rejected by the farmer unions, in reality, does not meet their demands and can only be called a corporate cabal conspiracy letter, and by rejecting it, the farmers have proved that they are intelligentand aware."]
        },
        {
            id: 3,
            title: "Yearning to Read",
            writter: "Jassi Sangha, Singhu Site",
            description: [
                "Perhaps you can tell by the photo, Bapu Ji is sitting by himself with the paper close to their eyes as they try to read it. I was taking photos of the elderly at the protest, and my friend Inder gestured to me to photograph him. When I looked at Bapu Ji carefully before taking my photo, I already knew that I would go and speak with him. After taking my photo, I went to him and asked, ‘Bapu Ji, did you forget your glasses at home?’ He said, ‘No, child, I don’t know how to read very well. I only recognize the letters, connect each of them and some of the words appear!’ I asked, ‘Bapu Ji, may I read it aloud for you!’ They said, ‘Child of mine, that would be amazing!’",
                "It was a 4-5 page leaflet from the Joint Farmer Committee that I started reading, and believe it or not, Bapu Ji explained it to me. He is 85 years old, a resident of Jhorrhan village, District Ludhiana. As he spoke, he pulled out a tiny, worn diary from his pocket and asked me to write my name and I said, ‘Should I write my phone number?’ They said, ‘Daughter, write down the name of your village. Whenever I go towards your village, I will find you and visit you. You have taught me so much today.’ But actually Bapu Ji had taught me. I had only read aloud to them. ",
                "At that time, I saw that Bapu Ji did not have a blanket, and the afternoon became extremely cold after it rained. After asking, I learned that he did not bring one from home and no one was distributing blankets in this area. Some young men were eating nearby at a trolley and I requested them to arrange for Bapu Ji to receive a blanket. They promised to do this. In my haste, I didn’t even get their number, but as I sat in my own blanket, I kept feeling bad as I thought about Bapu Ji. ",
                "In an hour, one of the young brothers Instagram messaged me – ‘Sister, we have given Bapu Ji a blanket. We requested him to join us to sleep in the trolley, where it was warmer, but Bapu Ji refused - ‘Son, if I get up from here, then it will be the same as running away from the battlefield.’ ‘ So Bapu Ji slept on a carpet laid out on the floor. ",
                "My dear brothers and sisters, the courage of our 85 year old grandfather is an example of wisdom. If thousands of our grandfathers, grandmothers, and parents are sitting here with this courage, then why shouldn’t we be in Chardi Kala (state of eternal optimism despite all obstacles) ? "
            ]
        },
        {
            id: 4,
            title: "Art and Struggle",
            writter: "Jatinder Mauhar, Tikri Site",
            description: [
                "The films we watch. The novels, stories we read. Much can be said and written about forms of art, but what is art in just a few written words? I would say that art is a unique way of connecting human to human. It conveys one human’s emotions to another. It allows you to feel the well-being or misery of a person in front of you. Art can awaken an extraordinary empathy inside you, so that you can feel what someone else is going through.",
                "Like art, the Struggle can also bring humans closer to each other. This is the responsibility and the relationship between art and political struggle. In the midst of a struggle, a human says - you and I have the same fight and you and I have the same life. Together, we can find a solution. The artist has to decide if he is going to stand with those who take away the rights or those who take what is rightfully theirs.",
                "If art does not teach a human to respect another human. If it declares another working human to be an enemy, then that art is short-lived and dangerous. In the same way, if a struggle inspires an ego that you are better than others, in which a human from another religion, race, caste, or region is considered inhuman, then that struggle is also dangerous. Our farmers, laborers, brothers, and sisters are fighting for their rights in this movement. In which all will get justice. All will have food. All will live with dignity. I salute those in the arts and this movement who seek the beneficiation for all."
            ]
        },
        {
            id: 5,
            title: "Two Farmers",
            writter: "Tanveer",
            description: [
                "My neighboring village is Bappiana, District Mansa. Two farmers from there have gone to Delhi. To the sit in. Their fields share a boundary. One of them has a chicken farm. They are rivals and are not on speaking terms. One of them has sued the other one. The one who sued says to the other – ‘here, brother, drink cha’. He sits near him. After a while of silence, he says – ‘Brother, first, when I get back, I’m going to take back my lawsuit against you, my friend! Delhi has lost. Both have won the lawsuit.’"
            ]
        }
    ]
    return (
        <div className="accordion" id="accordionExample">
            <ul className="list-group list-group-horizontal mt-2 mb-2">
                <li className="list-group-item"><Link to="/" className="btn">English</Link></li>
                <li className="list-group-item"><Link to="/punjabi" className="btn">Punjabi</Link></li>
            </ul>

            {newsData.map(news => (
                <Collapsible className="bg-light" trigger={news.title} key={news.id}>
                    <p>{news.Writter}</p>
                    {news.description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </Collapsible>
            ))}
            <hr />
            {data.length === 0 ? <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> : (data.map(news => (
                <Collapsible className="bg-light" trigger={news.title} key={news.id}>
                    {news.description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </Collapsible>)
                
            ))}
        </div>
    )
}

export default Home
