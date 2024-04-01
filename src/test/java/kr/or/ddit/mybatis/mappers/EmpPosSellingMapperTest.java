package kr.or.ddit.mybatis.mappers;

import static org.junit.jupiter.api.Assertions.*;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;

import kr.or.ddit.AbstractRootContextTest;

class EmpPosSellingMapperTest extends AbstractRootContextTest{

	@Inject
	private EmpPosSellingMapper dao;
	
	@Test
	void test() {
		dao.selectYearSetleList("2023");
	}
	
	@Test
	void test2() {
		dao.selectMonthSetleList("2024-03-10");
	}
	
	@Test
	void test3() {
		dao.selectWeekSetleList("2024-03-19");
	}
	
	@Test
	void test4() {
		dao.selectWeekRsvtCount("2024-03-20");
	}
	

}
