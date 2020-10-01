let expense = function(des, date, amt){
    this.eDes = des;
    this.eDate = date;
    this.eAmt = amt;
}


let expenseBox = function(){
    this.details = [];
   
    this.addDetails = function(matter){
        this.details.push(matter);
    }

    this.removeDetails = function(des){
        // const item = this.cart.find(function(value, index){
        //     return value.pId == id;
        // });
        // let index = this.cart.indexOf(item);
        // this.cart.splice(index, 1);
        
        for (let index = 0; index < this.details.length; index++) {
            if(this.details[index].eDes == des)
                this.details.splice(index, 1);            
        }
    }

    this.find = function(des){
        return this.details.find(function(value){
            return value.eDes == des;
        })
    }
    this.modify = function(matter){
        for (let index = 0; index < this.details.length; index++) {
            if(this.details[index].eDes == matter.eDes){
                this.details[index].eDate = matter.eDate;
                this.details[index].eAmt = matter.eAmt;
            }
        }       
    }
}