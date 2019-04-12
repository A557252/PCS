package com.pcs.portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;




@SpringBootApplication
public class PCSMaster {
	
	public static void main(String[] args) {
		SpringApplication.run(PCSMaster.class, args);
//		FtpOutboundGateway gateway=new FtpOutboundGateway(myFtpsSessionFactory(), "ls","payload");
}
//    @Bean
//    public static DefaultFtpsSessionFactory  myFtpsSessionFactory(){
//        DefaultFtpsSessionFactory sess = new DefaultFtpsSessionFactory();
//        sess.setHost("nlsivm758.sdmc.ao-srv.com");
//        sess.setUsername("pcsuser");
//        sess.setPassword("Atos123");
//        return sess;
//    }
}