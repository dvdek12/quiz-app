const data = {
    quizzes: [
        {
            quizName: 'Historyczne szlaki',
            category: 'historia',
            img: "https://imgs.search.brave.com/cvMfVETauUf2XU5PRGuKrOija-IVJJ-6TYi8NsPVMl4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjg1/NjkzNTI2L3Bob3Rv/L3ZpbnRhZ2UtcGhv/dG9zLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pS3NLaDBw/WmRTNlpzSDRhUEdH/djdNMTJyb0I5OEc0/YTBsSVBhRGt2dzJN/PQ",
            questions: [
                {
                    question: 'W jakim wieku była Bitwa pod Grunwaldem?',
                    img: "https://imgs.search.brave.com/VmTncearh6QkmQShlUQoQBlS-Rr-iPvwPaeGbXFsuKQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vY2Ru/LmV1L3B1bHNjbXMt/dHJhbnNmb3Jtcy8x/L05jdWt0a3FUVVJC/WHk5aFptVTJOemxq/WkdZMU56Z3pPREpo/TURObVlqVmxNemN6/TW1NM1pqUmpZeTVx/Y0dWbmtwVUR6UUdW/QU0wS3lNMEdFWk1G/elFTd3pRS2s",
                    answers: [
                        {
                            correct: true,
                            content: '1410'
                        },
                        {
                            correct: false,
                            content: '1210'
                        },
                        {
                            correct: false,
                            content: '1110'
                        },
                        {
                            correct: false,
                            content: '1210'
                        }
                    ]
                },
                {
                    question: 'W jakim wieku zaczela sie I wojna swiatowa?',
                    img: "https://imgs.search.brave.com/J7xLXII2FjajRb2q_2Hu2hJA4TJB5yTDX6CUom8ABag/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE0/ODY2MzAyL3Bob3Rv/L2dlcm1hbi1ndW4t/Y29tcGFueS1kdXJp/bmctYmF0dGxlLWF0/LWRhcmtlaG1lbi1w/aG90by5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9U0UyVWdN/elFtYmFNVHZmcjd0/R1ZOSmVXbS0yNUVQ/dVVLWG12aXlfUWIy/ND0",
                    answers: [
                        {
                            correct: false,
                            content: '1814'
                        },
                        {
                            correct: true,
                            content: '1914'
                        },
                        {
                            correct: false,
                            content: '1110'
                        },
                        {
                            correct: false,
                            content: '1210'
                        }
                    ]
                },
                {
                    question: 'Jaki mamy teraz wiek?',
                    img: "https://imgs.search.brave.com/cZN8d9fbMnH6h6gHv7bfV52-chZW6Ef0-QBInjO9vz8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/OS8wNS8xOC8zMi9v/bGQtYm9va3MtNDM2/NDk4XzY0MC5qcGc",
                    answers: [
                        {
                            correct: false,
                            content: 'XI'
                        },
                        {
                            correct: true,
                            content: 'XXI'
                        },
                        {
                            correct: false,
                            content: 'XIV'
                        },
                        {
                            correct: false,
                            content: 'XV'
                        }
                    ]
                }
            ]
        },

        // {
        //     quizName: 'Stasiubizm',
        //     category: 'ideologia',
        //     img: "https://imgs.search.brave.com/0ooK165HGuVvJdsqwBmO7OczoCj_sQUSR2Ysuf9wGJA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9maXQtNzYwdyxm/X2F1dG8scV9hdXRv/OmJlc3QvbmV3c2Nt/cy8yMDE3XzA2LzE4/OTQ0MDEvMTcwMjA3/LWFsaWVucy1yaGst/MTY0NnAuanBn",
        //     questions: [
        //         {
        //             question: 'Jaka jest najwazniejsza zasada Bubizmu?',
        //             img: "https://imgs.search.brave.com/LAHSvazLdXOI1MHSclK_yBXyoUJfgpBZhblUhlrYTWU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODkxNDA5MTU3MDgt/MjBmZjU4NmZlNzY3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OGQy/VmxaSHhsYm53d2ZI/d3dmSHg4TUE9PQ",
        //             answers: [
        //                 {
        //                     correct: false,
        //                     content: 'Buszek'
        //                 },
        //                 {
        //                     correct: false,
        //                     content: 'Nauka'
        //                 },
        //                 {
        //                     correct: false,
        //                     content: 'Dziewczynki'
        //                 },
        //                 {
        //                     correct: true,
        //                     content: 'Dziewczynki i Buszek <3'
        //                 }
        //             ]
        //         },
        //         {
        //             question: 'Co najbardziej lubi Stasiu?',
        //             img: "https://imgs.search.brave.com/CwDA9qzvPw4fEwl29JQ-KFA-Y0GAfaTF2pBwrla7tkw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qb3lmdWwtYWZy/aWNhbi1hbWVyaWNh/bi1odXNiYW5kLWh1/Z2dpbmctd2lmZS1z/dGFuZGluZy1ob21l/XzExNjU0Ny0yODI2/Ni5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
        //             answers: [
        //                 {
        //                     correct: false,
        //                     content: 'Matma'
        //                 },
        //                 {
        //                     correct: false,
        //                     content: 'Fizyka'
        //                 },
        //                 {
        //                     correct: false,
        //                     content: 'Agnieszka Wojno'
        //                 },
        //                 {
        //                     correct: true,
        //                     content: 'Klaudynka <3'
        //                 }
        //             ]
        //         },
        //         {
        //             question: 'Czy uwazasz ze Stasiubizm to jedyna prawidlowa religia i wiara?',
        //             img: "https://imgs.search.brave.com/cJMHBprcssD3a6pQc5ircgjwde-18IJflHUQgcWgx-c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS83MDg0MzMw/OC82MDQ2OS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzYwNDY5NzQ1/MC1zdG9jay1waG90/by1zbm9vcC1kb2dn/LWFycml2ZXMtMjAy/Mi1tdHYuanBn",
        //             answers: [
        //                 {
        //                     correct: false,
        //                     content: 'TAK'
        //                 },
        //                 {
        //                     correct: false,
        //                     content: 'NIE'
        //                 },
        //                 {
        //                     correct: false,
        //                     content: 'JEBAC POLICJE'
        //                 },
        //                 {
        //                     correct: true,
        //                     content: 'zajarałbym bucha'
        //                 }
        //             ]
        //         },
        //         {
        //             question: 'Czwarte testowe pytanie?',
        //             img: "https://imgs.search.brave.com/LAHSvazLdXOI1MHSclK_yBXyoUJfgpBZhblUhlrYTWU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODkxNDA5MTU3MDgt/MjBmZjU4NmZlNzY3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OGQy/VmxaSHhsYm53d2ZI/d3dmSHg4TUE9PQ",
        //             answers: [
        //                 {
        //                     correct: false,
        //                     content: 'Buszek'
        //                 },
        //                 {
        //                     correct: false,
        //                     content: 'Nauka'
        //                 },
        //                 {
        //                     correct: false,
        //                     content: 'Dziewczynki'
        //                 },
        //                 {
        //                     correct: true,
        //                     content: 'Dziewczynki i Buszek <3'
        //                 }
        //             ]
        //         },
        //     ]
        // },

        {
            quizName: 'Bboying i Historia',
            category: 'taniec',
            img: "https://imgs.search.brave.com/Xr3ltzcy8XnI_cXiUwq64PPg98NMGTUGyeLiD2BSrYU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTE0MzUyNjM3MjQt/M2YzYzRlNGNjYTI3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OFlu/SmxZV3RrWVc1alpY/eGxibnd3Zkh3d2ZI/eDhNQT09",
            questions: [
                {
                    question: 'Kiedy powstał Bboying?',
                    img: "https://imgs.search.brave.com/McdZMXueUlAqvemRRZtLN2Gv7euBVsaw2PdPtkAH5uo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgx/MDU5ODY3L3Bob3Rv/L2Jyb29rbHluLWJy/aWRnZS1pbi1tYW5o/YXR0YW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWVJblA3/RW5WWjg3YXpOLWhw/T0VOTV9XcHlLLVlV/REk5TWxhSEhxYndu/N0U9",
                    answers: [
                        {
                            correct: true,
                            content: 'Lata 70 i 80'
                        },
                        {
                            correct: false,
                            content: 'Lata 50'
                        },
                        {
                            correct: false,
                            content: 'Lata 00'
                        },
                        {
                            correct: false,
                            content: 'Lata 90'
                        }
                    ]
                },
                {
                    question: 'Która ekipa powstała na Bronxie?',
                    img: "https://imgs.search.brave.com/GeSbHLNnqxNZK71KRwGgdId9QbCvT4Pg8U3ZoNrHk50/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQ0/NTkyMTUxL3Bob3Rv/L3JvY2tzdGVhZHkt/Y3Jldy1tdXNpa2dy/dXBwZS10YW56Z3J1/cHBlLWJyZWFrZGFu/Y2UtcmFwLXVzYS1h/dWZ0cml0dC0xOTg0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1FMmt0SFBPWEQ0/bG01S2k2aEQtQ29G/RTVrdlFfaHJON01E/aFgyVWs1MHBZPQ",
                    answers: [
                        {
                            correct: true,
                            content: 'Rock Steady Crew'
                        },
                        {
                            correct: false,
                            content: 'Team France'
                        },
                        {
                            correct: false,
                            content: 'Slavic United'
                        },
                        {
                            correct: false,
                            content: 'Self X Crew'
                        }
                    ]
                },
                {
                    question: 'Jaki był pierwszy DJ Hip-Hopu?',
                    img: "https://imgs.search.brave.com/JxkdHYF4HeRbxmhJFrBLbzXvfyPB-yV7w5LGobxuSrY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8yMy8xOC8wNS9j/b25jZXJ0LTE4NTQx/MTNfNjQwLmpwZw",
                    answers: [
                        {
                            correct: false,
                            content: 'DJ Rura'
                        },
                        {
                            correct: true,
                            content: 'DJ Kool Herc'
                        },
                        {
                            correct: false,
                            content: 'DJ Premier'
                        },
                        {
                            correct: false,
                            content: 'DJ Boobcat'
                        }
                    ]
                },
                {
                    question: 'W którym roku pierwszy raz zorganizowano zawody Redbull BC ONE?',
                    img: "https://imgs.search.brave.com/Tvq7i-mRZwV2KYoH8FlM2TKjyC9-DSyVsVVaAwcN8b4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hbmRz/Y2FwZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMTEv/R2V0dHlJbWFnZXMt/MTIzNjQwMzY0MS1l/MTY2ODA5NTM2NjQ3/NC5qcGc_dz01MDA",
                    answers: [
                        {
                            correct: false,
                            content: '2006'
                        },
                        {
                            correct: false,
                            content: '1998'
                        },
                        {
                            correct: false,
                            content: '1999'
                        },
                        {
                            correct: true,
                            content: '2004'
                        }
                    ]
                },
                {
                    question: 'Jak sie nazywa agresywny styl w tańcu podobny do walki?',
                    img: "https://imgs.search.brave.com/bktdVhdYAVtjpVgfyytn4LFIW6NBWmCVv6h4QXWAa_s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hlbmlubWFuaWxh/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8xMC91cHJv/Y2stZGFuY2UuanBn",
                    answers: [
                        {
                            correct: false,
                            content: 'Backrock'
                        },
                        {
                            correct: false,
                            content: 'Toprock'
                        },
                        {
                            correct: true,
                            content: 'Uprock'
                        },
                        {
                            correct: false,
                            content: 'Powers'
                        }
                    ]
                },
                {
                    question: 'Jak sie nazywają pierwsze w historii międzynarodowe zawody Bboyingu?',
                    img: "https://imgs.search.brave.com/5RTakCIZRZYoEFUuGJfepPFrYqWdjuFxUdpKlH4eSCw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODU3/OTAwMzAvcGhvdG8v/YnJlYWtkYW5jZS1p/bi10aGUtc3RyZWV0/LndlYnA_Yj0xJnM9/MTcwNjY3YSZ3PTAm/az0yMCZjPWkyelBL/a3NxcXRHSWpHSU90/MzZBelBUSWJLQnd0/Sm90SDdVRThwTHFN/TzQ9",
                    answers: [
                        {
                            correct: false,
                            content: 'Redbull BC ONE'
                        },
                        {
                            correct: false,
                            content: 'The Notorious IBE'
                        },
                        {
                            correct: false,
                            content: 'Szalony Dżemik'
                        },
                        {
                            correct: true,
                            content: 'Battle of The Year - BOTY'
                        }
                    ]
                },
                {
                    question: 'Jak sie nazywa pierwsza w historii ekipa bboys?',
                    img: "https://imgs.search.brave.com/TjGHE-t7lebQlVivM0RsjEZrKDQf39SsUXwBT9XWdAQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUz/OGQxOWZlZTRiMGVi/ZTM4Y2U2NWI4Yy8x/NDIxMDk0NTA2NzI1/LVBZM1hTOE1KU0Ja/NTdNOFpVWkdML2Jy/ZWFrZGFuY2UtY29v/bC5qcGc",
                    answers: [
                        {
                            correct: true,
                            content: 'The Zulu Kings'
                        },
                        {
                            correct: false,
                            content: 'Soul Force Crew'
                        },
                        {
                            correct: false,
                            content: 'T.I.P Crew'
                        },
                        {
                            correct: false,
                            content: 'Blackout Crew'
                        }
                    ]
                },
                {
                    question: 'Jak sie nazywa pierwsza w historii ekipa bboys w Polsce?',
                    img: "https://imgs.search.brave.com/bspgwDW_R1Yswoaw-f194072ya60mkOCunIM4QgixEA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b2xhbmQtZmxhZ18x/ODcyOTktMzcwOTku/anBnP3NpemU9NjI2/JmV4dD1qcGc",
                    answers: [
                        {
                            correct: false,
                            content: 'Rockafellaz Crew'
                        },
                        {
                            correct: false,
                            content: 'Polskii Obiad'
                        },
                        {
                            correct: true,
                            content: 'Scrap Beat'
                        },
                        {
                            correct: false,
                            content: 'Najlepsi'
                        }
                    ]
                },
                {
                    question: 'Jakie jest rozwinięcie kultowego ruchu footworkowego CC?',
                    img: "https://imgs.search.brave.com/5gm89B6QFcJLjdoycSDYBCTIRKgkbcSAEXuAdQeNh4U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FjL0NDSl8tX0Jy/ZWFrZGFuY2VfMS5q/cGc",
                    answers: [
                        {
                            correct: true,
                            content: 'Crazy Commander'
                        },
                        {
                            correct: false,
                            content: 'Cuc-Cuc'
                        },
                        {
                            correct: false,
                            content: 'Crazy Connect'
                        },
                        {
                            correct: false,
                            content: 'Nie ma rozwniniecia'
                        }
                    ]
                },
                {
                    question: 'Na podstawie czego powstała muzyka do Bboyingu?',
                    img: "https://imgs.search.brave.com/emcYe7H3OIHFEC8VGdRyrnY2Tmedqfh9zn8ehpqCZKg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9kai1pbi10aGUt/bWl4LWZyZWUtcGhv/dG8uanBnP3c9MjIx/MCZxdWFsaXR5PTcw",
                    answers: [
                        {
                            correct: false,
                            content: 'Gitara'
                        },
                        {
                            correct: false,
                            content: 'Orkiestra'
                        },
                        {
                            correct: true,
                            content: 'Breaks, Sample'
                        },
                        {
                            correct: false,
                            content: 'Jazz'
                        }
                    ]
                },
            ]
        },
        
    ]
}

export default data