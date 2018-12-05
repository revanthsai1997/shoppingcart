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
        public IHttpActionResult getProducts(int id)
        {
            List<ProductDTO> productlist = ctx.products.Where(p=>p.categoryid==id).Select(n => new ProductDTO() { productid = n.productid, productName = n.productName, price = n.price, qty = n.qty,categoryid=n.categoryid,picture=n.picture }).ToList();
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
            prod.picture = pro.picture;
            ctx.products.Add(prod);

            ctx.SaveChanges();
            return Ok();
        }
        [HttpGet]
        public IHttpActionResult getProductsGroupByCategories()
        {
            //List<ProductDTO> productlist = 
            var list=ctx.categories.Select(c => new { c.categoryid,c.categoryName,Products=c.products.Select(p=>new { p.productid,p.price,p.qty,p.productName,p.picture }).ToList()}).ToList();
            return Json(list);
        }
    }
}
