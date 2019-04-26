package com.pcs.portal;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pcs.portal.model.ApiResponse;
import com.pcs.portal.model.LoginUser;

import junit.framework.Assert;



@RunWith(SpringRunner.class)
@SpringBootTest
public class PCSApplicationTests {


	private MockMvc mockMvc;
	@Autowired
	private WebApplicationContext context;
	
	ObjectMapper objectMapper=new ObjectMapper();
	
	@Before
	public void setUp() {
		mockMvc=MockMvcBuilders.webAppContextSetup(context).build();
	}
	
	@Test
	public void checkLogin() throws Exception {
		LoginUser userData=new LoginUser();
		userData.setUsername("pravesh");
		userData.setPassword("pravesh");
		userData.setEnvironment("Acceptance");
		String jsonrequest=objectMapper.writeValueAsString(userData);
		MvcResult result=mockMvc.perform(post("/auth/login").content(jsonrequest).contentType(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk()).andReturn();
		String resultContent=result.getResponse().getContentAsString();
		ApiResponse response=objectMapper.readValue(resultContent, ApiResponse.class);
		
		Assert.assertTrue(response.getStatus()==200);
	}
	
	@Test
	public void checkLoginFailure() throws Exception {
		LoginUser userData=new LoginUser();
		userData.setUsername("pravesh");
		userData.setPassword(" ");
		userData.setEnvironment("Acceptance");
		String jsonrequest=objectMapper.writeValueAsString(userData);
		MvcResult result=mockMvc.perform(post("/auth/login").content(jsonrequest).contentType(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk()).andReturn();
		String resultContent=result.getResponse().getContentAsString();
		ApiResponse response=objectMapper.readValue(resultContent, ApiResponse.class);
		Assert.assertFalse(response.getStatus()!=200);
	}
	
	@Test
	public void checkLoginAgain() throws Exception {
		LoginUser userData=new LoginUser();
		userData.setUsername("shukla");
		userData.setPassword("pravesh");
		userData.setEnvironment("Acceptance");
		String jsonrequest=objectMapper.writeValueAsString(userData);
		MvcResult result=mockMvc.perform(post("/auth/login").content(jsonrequest).contentType(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk()).andReturn();
		String resultContent=result.getResponse().getContentAsString();
		ApiResponse response=objectMapper.readValue(resultContent, ApiResponse.class);
		Assert.assertTrue(response.getStatus()!=200);
	}
	
}
