using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimpleChat_SignalR.Models
{
    public class ChatHub:Hub
    {
        public void SendMessage(string name, string message)
        {
            //send message is dynamic proparity must me the same in javascript
            Clients.All.pushMessage(name,message);
        }
    }
}