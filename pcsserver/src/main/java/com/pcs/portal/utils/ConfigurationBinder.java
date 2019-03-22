package com.pcs.portal.utils;

import javax.sql.DataSource;
import oracle.jdbc.pool.OracleDataSource;
import javax.validation.constraints.NotNull;



import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("oracle")
public class ConfigurationBinder {


    @NotNull
    private String username;
    @NotNull
    private String password;
    @NotNull
    private String url;
    public void setUsername(String username) {
        this.username = username;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public String getUrl() {
        return this.url;
    }

    public String getUsername() {
        return this.username;
    }
    public String getPassword() {
        return this.password;
    }


	
	@Bean
	DataSource datasource() throws Exception{
		OracleDataSource dataSource=new OracleDataSource();
        dataSource.setUser(username);
        dataSource.setPassword(password);
        dataSource.setURL(url);
        dataSource.setImplicitCachingEnabled(true);
        dataSource.setFastConnectionFailoverEnabled(true);
        System.out.println(dataSource);
        return dataSource;
	}
}
