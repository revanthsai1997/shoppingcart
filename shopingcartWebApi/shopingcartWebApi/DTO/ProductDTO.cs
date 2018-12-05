using shopingcartWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace shopingcartWebApi.DTO
{
    public class ProductDTO
    {
        public int productid { get; set; }
        public string productName { get; set; }
        public Nullable<int> categoryid { get; set; }
        public Nullable<int> price { get; set; }
        public Nullable<int> qty { get; set; }
        public byte[] picture { get; set; }
    }
}