package com.pcs.portal;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;



@RunWith(SpringRunner.class)
@SpringBootTest
public class PCSApplicationTests {

	/*@Test
	public void testSearchPackage() throws Exception{
		List<Car> resultList = new ArrayList<Car>();
		resultList = carService.getVINPackages("WVWZZZ1J3W000001");
		for(Car car: resultList) {
			assertEquals("WVWZZZ1J3W000001", car.getVin());
			assertEquals(1, car.getCarId()); 
			Model mod = car.getModel();
			assertEquals(1, mod.getModelId());
			assertEquals("polo", mod.getModelName());
		}
		
	}*/ 
}
