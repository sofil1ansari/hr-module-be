//package com.coderower.hrmodule.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class SwaggerConfig {
//
//    @Bean
//    public Docket customImplementation() {
//
//        return new Docket(DocumentationType.SWAGGER_2)
//                .select()
//                .paths(PathSelectors.any())
//                .apis(RequestHandlerSelectors.basePackage("com.ntapan"))
//                .build()
//                .apiInfo(apiInfo())
//                .pathMapping("/")
//                .useDefaultResponseMessages(false)
//                .directModelSubstitute(LocalDate.class, String.class)
//                .genericModelSubstitutes(ResponseEntity.class);
//    }
//
//    ApiInfo apiInfo() {
//        return new ApiInfoBuilder()
//                .title("Swagger with Spring Boot + Security")
//                .version("1.0.0")
//                .description("Your Description")
//                .contact(new Contact("Contact Name", "Contact_URL","contact@email.com"))
//                .build();
//    }
//}