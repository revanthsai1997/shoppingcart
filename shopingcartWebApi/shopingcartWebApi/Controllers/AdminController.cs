using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using shopingcartWebApi.Models;
using shopingcartWebApi.DTO;

namespace shopingcartWebApi.Controllers
{
    public class AdminController : ApiController
    {
        shopingcartEntities ctx = new shopingcartEntities();
        [HttpGet]
        public IHttpActionResult getCategories()
        {
           List<categoryDTO>  categorylist=ctx.categories.Select(n=>new categoryDTO (){ categoryid=n.categoryid,categoryName= n.categoryName }).ToList();
            return Json(categorylist);
        }
        [HttpPost]
        public IHttpActionResult addCategory(categoryDTO category)
        {
            category item = new Models.category();
            item.categoryName = category.categoryName;
            ctx.categories.Add(item);
            ctx.SaveChanges();
            return Ok();
        }
        [HttpGet]
        public IHttpActionResult getProducts()
        {
            List<ProductDTO> productlist = ctx.products.Select(n => new ProductDTO() { productid = n.productid, productName = n.productName, price = n.price, qty = n.qty,categoryid=n.categoryid }).ToList();
            return Json(productlist);
        }
        [HttpPost]
        public IHttpActionResult addProduct(ProductDTO pro)
        {
            product prod = new product();
            prod.productName = pro.productName;
            prod.price = pro.price;
            prod.qty = pro.qty;
            prod.categoryid = pro.categoryid;
            ctx.products.Add(prod);
            ctx.SaveChanges();
            return Ok();
        }
    }
}
