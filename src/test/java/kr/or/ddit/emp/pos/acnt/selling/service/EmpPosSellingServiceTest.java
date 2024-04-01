package kr.or.ddit.emp.pos.acnt.selling.service;

import static org.junit.jupiter.api.Assertions.*;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;

import kr.or.ddit.AbstractRootContextTest;

class EmpPosSellingServiceTest extends AbstractRootContextTest{

	@Inject
	private EmpPosSellingService service;
	
	@Test
	void test() {
		service.retrieveYearSetle("2024");
	}
//	@Test
//	void test2() {
//		service.retrieveMonthSetle("2024-03-14");
//	}
//	@Test
//	void test3() {
//		service.retrieveWeekSetle("2024-03-14");
//	}

}
