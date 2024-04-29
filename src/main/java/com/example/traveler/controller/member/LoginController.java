package com.example.traveler.controller.member;

import ch.qos.logback.core.model.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@Controller
public class LoginController {


    @RequestMapping("/memberL")
    public String memberLogin() throws Exception{
        return "/member/memberLogin";
    }
}
