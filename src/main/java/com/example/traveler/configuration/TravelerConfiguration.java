package com.example.traveler.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.HiddenHttpMethodFilter;

public class TravelerConfiguration {

    //Entity-DTO 간 변환
//    @Bean
//    public ModelMapper modelMapper() {
//        return new ModelMapper();
//    }
//
//    @Bean
//    public UploadCrewFileUtil uploadCrewFileUtil(){
//        return new UploadCrewFileUtil(uploadPath());
//    }
//    @Bean
//    public UploadReviewFileUtil uploadReviewFileUtil(){
//        return new UploadReviewFileUtil(uploadPath());
//    }

    //    파일 저장될 절대 경로(로컬)
    @Bean(name = "uploadPath")
    public String uploadPath() {
        return System.getProperty("user.dir")+"/src/main/resources/static/_image";
    }

//    //파일 저장될 절대 경로(톰캣)
//    @Bean(name = "uploadPath")
//    public String uploadPath() {
//        return "/usr/local/tomcat8.5/doldolseo/_image";
//    }

    //HTTP hidden Method : delete, put, patch ..
    @Bean
    public HiddenHttpMethodFilter httpMethodFilter() {
        return new HiddenHttpMethodFilter();
    }

//    // @Author 백정연, Date : 2021/08/11
//    @Bean
//    public UploadProfileUtil uploadProfileUtil() {return  new UploadProfileUtil(uploadPath());}
}
