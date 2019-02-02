export default class Client {

    static getUrl() {
        return 'https://jsonplaceholder.typicode.com';
    }


    /** Posts */
    static getPosts(params) {
        let request = '';
        request += params.search !== undefined ? `&q=${params.search}` : '';
        return fetch(this.getUrl() + `/posts?_limit=${params.itemsOnPage}&_page=${params.currentPage}&_order=${params.order}&_sort=id` + request)
            .then(response => {
                return response.json().then(json => {
                    return {
                        json: json,
                        total: response.headers.get("x-total-count")
                    }
                });
            })
    }

    static searchPost(params) {
        return fetch(this.getUrl() + `/posts?q=${params.search}&_limit=${params.itemsOnPage}&_page=${params.currentPage}&_order=${params.order}`)
            .then(response => {
                return response.json().then(json => {
                    return {
                        json: json,
                        total: response.headers.get("x-total-count")
                    }
                });
            })
    }

    static getPost(params) {
        return fetch(this.getUrl() + `/posts/${params.id}`)
            .then(response => response.json())
            .then(json => json)
    }

    /** User */
    static getUserByPost(params) {
        return fetch(this.getUrl() + `/users/${params.id}`)
            .then(response => response.json())
            .then(json => json)
    }

    /** Comments */
    static getCommentsByPost(params) {
        return fetch(this.getUrl() + `/comments?_sort=id&_order=desc&_limit=110&postId=${params.id}`)
            .then(response => response.json())
            .then(json => json)
    }

    static createComment(params) {
        return fetch(this.getUrl() + '/posts', {
            method: 'POST',
            body: params.data,
        });
    }

    static getData(path, options) {
        let url = `${this.getUrl() + path}`;
        let params = "";

        if(options && options.hasOwnProperty('params')){
            for (let key in options.params) {
                if(options.params[key] === ''){
                    continue;
                }
                if (params !== "") {
                    params += "&";
                }
                params += key + "=" + options.params[key];

            }
            url += `${params ? '?' + params : ''}`;
        }

        return fetch(url)
            .then(response => {
                return response.json().then(json =>{
                    return {
                        json: json,
                        headers: {
                            total: response.headers.get('x-total-count') ? +response.headers.get('x-total-count') : json.length
                        }
                    }
                })
            } )
            .then(json => json);
    }
}
