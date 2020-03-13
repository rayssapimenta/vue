    new Vue({
	    el: "#desafio",
	    data: {
            nome:"Rayssa Pimenta",
            idade: 21,
            imagem: "https://media-exp1.licdn.com/dms/image/C5603AQGHwRE704fnSg/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=sUir9X6eoOuu_yu6Y19q4VHKrgBTzC1etN0cSD_J9-Y",
        },
        methods: {
            idadeVezes3() {
                return this.idade * 3
            },
            random() {
                return Math.random()
            },
        }
    })