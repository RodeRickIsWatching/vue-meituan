class _Ajax {
    constructor() {
        this.baseUrl = 'http://api.duyiedu.com';
        this.key = 'appkey=roderick_lu_1546495503053';
        this.getProvinceCity = '/api/meituan/city/province.json';
        this.getHot = '/api/meituan/city/cityList.json';
        this.getRecent = '/api/meituan/city/recents.json';
    }
    get(_type) {
        if (typeof _type == 'string') {
            switch (_type.toLowerCase()) {
                case 'province':
                    this.url = `${this.baseUrl}${this.getProvinceCity}?${this.key}`;
                    return this._sendAjax();
                case 'hot':
                    this.url = `${this.baseUrl}${this.getHot}?${this.key}`;
                    return this._sendAjax();
                case 'recent':
                    this.url = `${this.baseUrl}${this.getRecent}?${this.key}`;
                    return this._sendAjax();
                default:
                    throw new Error("wrong keyWord,Only support the keyWord: province | hot | recent")
            }
        } else {
            throw new Error("wrong type of keyWord")
        }
    }
    _sendAjax() {
        return new Promise(result => {
            let _ajax = new XMLHttpRequest();
            _ajax.open("GET", this.url, true);
            _ajax.send();
            _ajax.onreadystatechange = (res) => {
                if (_ajax.readyState == 4 && _ajax.status == 200) {
                    return result(_ajax.responseText);
                }
            }
        })

    }
}

export {
    _Ajax
}