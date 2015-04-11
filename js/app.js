(function() {
    var app = angular.module("cash", ["xeditable"]);

     app.run(function(editableOptions) {
      editableOptions.theme = 'bs3';
      });

    app.controller('CashController', function(){
        this.products = items;
        this.tax = 7.5;
        this.chnageReceived = 0;

         this.subTotal = function(){
            var subtotal=0;
            for(var i=0; i < items.length; i++) {
                var tot= items[i];
                subtotal += (tot.quantity* tot.cost);
            }
            return subtotal;
        }

        this.addItem = function() {
            items.push({description:"",
                        brief:"",
                        quantity:0,
                        cost:0
                        });
            
        }

        this.removeItem = function(item) {
             items.splice(items.indexOf(item), 1);
            
        }

        this.reset = function(){
            items.splice(items[0], items.length);
        }

    });


    
    var items = [

        ];
})();
