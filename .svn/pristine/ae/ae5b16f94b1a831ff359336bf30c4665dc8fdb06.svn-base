package kr.or.ddit.mybatis.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.or.ddit.global.vo.CouponVO;
import kr.or.ddit.global.vo.MbrshSetleVO;
import kr.or.ddit.global.vo.SetleVO;

@Mapper
public interface MbrshSetleMapper {
	
	public String selectMbsNo();
	
	public String selectMbsSetleNo();
	
	public int insertToMbsSetle(MbrshSetleVO mbrsh);
	
	public int insertToSetle(SetleVO setle);
	
	public int insertMileage(@Param("cstNo") String cstNo,@Param("mileage") int mileage);
	
	public int insertCoupon(List<CouponVO> couponList);
	
}
