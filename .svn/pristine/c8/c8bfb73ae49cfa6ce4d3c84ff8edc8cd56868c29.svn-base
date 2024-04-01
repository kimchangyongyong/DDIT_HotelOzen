package kr.or.ddit.emp.pos.acnt.selling.service;

import java.util.List;

import kr.or.ddit.global.vo.ChkinVO;
import kr.or.ddit.global.vo.SellingVO;
import kr.or.ddit.global.vo.SetleVO;

public interface EmpPosSellingService {

	/**
	 * 연도별 매출 조회
	 * @param setleVO
	 * @return
	 */
	public List<SellingVO> retrieveYearSetle(String searchYear);
	
	/**
	 * 월별 매출 조회
	 * @param setleVO
	 * @return
	 */
	public List<SellingVO> retrieveMonthSetle(String searchDate);
	
	/**
	 * 주간별 매출 조회
	 * @param setleVO
	 * @return
	 */
	public List<SellingVO> retrieveWeekSetle(String searchDate);
	
	
	/**
	 * 주간별 체크인 수 조회
	 * @param searchDate
	 * @return
	 */
	public List<ChkinVO> retrieveWeekChekin(String searchDate);
}
