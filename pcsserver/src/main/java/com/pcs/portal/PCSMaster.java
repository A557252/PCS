package com.pcs.portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationContext;
import com.pcs.portal.utils.ConfigurationBinder;

/**
 * Author @ Sandeep Gupta
 */

@SpringBootApplication

@EnableConfigurationProperties(ConfigurationBinder.class)
public class PCSMaster {
	public static void main(String[] args) {
		 final ApplicationContext ctx =  SpringApplication.run(PCSMaster.class, args);
        final ConfigurationBinder confs = ctx.getBean(ConfigurationBinder.class);
        System.out.println(confs.getUrl());
        System.out.println(confs.getUsername());
        System.out.println(confs.getPassword());
	}
}
